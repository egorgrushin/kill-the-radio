import {
	ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
	ViewChild,
} from '@angular/core';
import * as Snap from 'snapsvg';
import 'snap.svg.zpd';
import { isNil } from 'lodash';
import { IPoint } from '../../core/core.types';

enum GraphShapeType { Remove, Add, Anchor, Text }

@Component({
	selector: 'graph',
	templateUrl: './graph.component.html',
	styleUrls: ['./graph.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphComponent implements OnInit, OnChanges {
	lastMatrix: any;
	nodeWrappers: any;
	edgeWrappers: void;
	@ViewChild('paperRef') paperRef;

	@Output() edit: EventEmitter<any> = new EventEmitter();
	@Output() add: EventEmitter<any> = new EventEmitter();
	@Output() remove: EventEmitter<any> = new EventEmitter();
	@Input() edges: any[];
	@Input() nodes: any[];
	@Input() root: any;
	@Input() disabled: boolean;
	private paper: any;
	private options: any;
	private row: number;
	private groupForAppends: any[] = [];
	private drawerDict: any = {
		[GraphShapeType.Anchor]: (point: IPoint) => {
			const pathString = `
				M${point.x + this.options.sR} ${point.y}
				l${-this.options.sR * 2} ${-this.options.sR}
				l0 ${this.options.sR * 2}
				Z
			`;
			const path = this.paper.path(pathString)
				.addClass('graph__button-icon');
			return this.paper.g(path)
				.addClass('graph__button graph__button--anchor');
		},
		[GraphShapeType.Add]: (point: IPoint) => {
			const pathString = `
				M${point.x} ${point.y - this.options.sR}
				l0 ${this.options.sR * 2}
				m${this.options.sR} ${-this.options.sR}
				l${-this.options.sR * 2} 0
			`;
			const path = this.paper.path(pathString)
				.addClass('graph__button-icon');
			const circle = this.paper.circle(point.x, point.y, this.options.sR)
				.addClass('graph__button-wrapper');
			return this.paper.g(circle, path)
				.addClass('graph__button graph__button--add');
		},
		[GraphShapeType.Remove]: (point: IPoint) => {
			const pathString = `
				M${point.x - this.options.sR} ${point.y - this.options.sR}
				l${this.options.sR * 2} ${this.options.sR * 2}
				m0 ${-this.options.sR * 2}
				l${-this.options.sR * 2} ${this.options.sR * 2}
			`;
			const path = this.paper.path(pathString)
				.addClass('graph__button-icon');
			const circle = this.paper.circle(point.x, point.y, this.options.sR)
				.addClass('graph__button-wrapper');
			return this.paper.g(circle, path)
				.addClass('graph__button graph__button--remove');
		},
		[GraphShapeType.Text]: (point: IPoint, text: string) => {
			const foreignObjTemplate = `
				<svg x="${point.x}" y="${point.y}" class="graph__edge-text-wrapper">
					<foreignObject width="100%" height="20">
						<body>
							<p class="graph__edge-text">${text}</p>
						</body>
					</foreignObject>
				</svg>
			`;
			const foreignObj = Snap.parse(foreignObjTemplate);
			return this.paper.group()
				.addClass('graph__edge-text-group')
				.append(foreignObj);
		},
	};

	constructor() {
		this.options = {
			height: 400,
			r: 18,
			// radius of buttons
			sR: 8,
			frame: 10,
			textMargin: 35,
			dx: 240,
			dy: 80,
		};
		const base = this.options.r + this.options.frame;
		this.options.startPoint = { x: base, y: base };
		this.options.nodeStandartWidth = this.options.r * 2;
	}

	resetView() {
		this.paper.panTo(this.lastMatrix);
	}

	ngOnInit() {
		this.paper = Snap(this.paperRef.nativeElement);
		this.apply(this.nodes, this.edges);
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.apply(this.nodes, this.edges);
	}

	private apply(nodes, edges) {
		if (nodes && edges && this.paper) {
			if (this.root && nodes.length > 0) {
				this.lastMatrix = this.paper.zpd('save');
				this.paper.zpd('destroy');
				this.paper.clear();
				this.nodeWrappers = [];
				this.groupForAppends = [];
				this.edgeWrappers = this.buildEdgeWrappers(this.root, edges);
				this.row = 0;
				this.renderBranch(this.root, this.edgeWrappers, nodes, 0);
				this.groupForAppends.forEach(g => this.paper.append(g));
				const padding = this.options.startPoint.y - this.options.r;
				const boundHeight = this.paper.node.getBBox().height + padding * 2;
				const height = boundHeight < this.options.height ? this.options.height : boundHeight;
				this.paper.attr({ height });
				this.paper.zpd({ load: this.lastMatrix, zoom: false });
			}
		}
	}

	private renderBranch(currentNode, wrappers, nodes, level) {
		this.renderNode(currentNode, level);
		const currentRow = this.row;
		wrappers.filter(wrapper => wrapper.entity.fromStateId === currentNode.id)
			.forEach((wrapper) => {
				const nextNode = nodes.find(node => node.id === wrapper.entity.toStateId);
				const nextLevel = level + 1;
				this.renderEdge(wrapper, currentRow, level, wrapper.isPhantom);
				this.row++;
				if (nextNode) {
					if (!wrapper.isPhantom) {
						this.renderBranch(nextNode, wrappers, nodes, nextLevel);
					} else {
						this.renderNode(nextNode, nextLevel, true);
					}
				}
			});
	}

	private buildEdgeWrappers(startNode, edges) {
		const queue = [startNode.id];
		const marked = [startNode.id];
		const edgeWrappers = edges.map((edge) => ({ entity: edge }));
		while (queue.length > 0) {
			const current = queue.shift();
			const nextWrappers = edgeWrappers.filter(wrapper => wrapper.entity.fromStateId === current);
			nextWrappers.forEach((wrapper) => {
				const toState = wrapper.entity.toStateId;
				if (toState) {
					wrapper.isPhantom = marked.includes(toState);
					marked.push(toState);
				} else { wrapper.isPhantom = false; }
			});
			const nextNodeIds = nextWrappers
				.filter(wrapper => !wrapper.isPhantom)
				.map(wrapper => wrapper.entity.toStateId);
			queue.push(...nextNodeIds);
		}
		return edgeWrappers;
	}

	private renderEdge(wrapper, startRow, level, isPhantom = false) {
		const eventData = { edge: wrapper.entity };
		const nextLevel = level + 1;
		const nextRow = this.row + 1;
		const points = [
			this.getPointByLevelAndRow(level, startRow),
			this.getPointByLevelAndRow(level, nextRow),
			this.getPointByLevelAndRow(nextLevel, nextRow),
		];
		const flattedPoints = points.reduce((memo, point, index, list) => {
			// cut ghost line (the last point of line)
			const cutX = index === list.length - 1 ? this.options.r : 0;
			memo.push(point.x - cutX, point.y);
			return memo;
		}, []);
		const groupClasses = `graph__edge-wrapper ${isPhantom ? 'graph__edge-wrapper--phantom' : ''}`;
		wrapper.line = this.paper
			.polyline(flattedPoints)
			.addClass('graph__edge');
		const p1 = points[points.length - 2];
		const p2 = points[points.length - 1];
		const editPoint = { x: (p1.x + p2.x - this.options.r + this.options.sR) / 2, y: p2.y };

		wrapper.edit = this.drawerDict[GraphShapeType.Anchor](editPoint)
			.click((e) => {
				e.stopPropagation();
				this.emit(this.edit, eventData);
			});
		wrapper.remove = this.drawerDict[GraphShapeType.Remove](p1)
			.click((e) => {
				e.stopPropagation();
				this.emit(this.remove, eventData);
			});
		wrapper.buttonsG = this.paper.group(wrapper.edit, wrapper.remove)
			.addClass('graph__buttons');

		if (wrapper.entity.examples) {
			const example = wrapper.entity.examples[0];
			const aboveString = example && example.example || wrapper.entity.title;
			if (aboveString) {
				const aboveTextPoint = { x: p1.x + this.options.r, y: p1.y - this.options.textMargin };
				wrapper.aboveText = this.drawerDict[GraphShapeType.Text](aboveTextPoint, aboveString)
					.click((e) => {
						this.emit(this.edit, eventData);
					});
				this.groupForAppends.push(wrapper.aboveText);
			}
		}
		if (wrapper.entity.transitionRequirements) {
			const belowString = wrapper.entity.transitionRequirements;
			if (belowString) {
				const belowTextPoint = { x: p1.x + this.options.r, y: p1.y + this.options.textMargin / 2 };
				wrapper.belowText = this.drawerDict[GraphShapeType.Text](belowTextPoint, belowString)
					.click((e) => {
						this.emit(this.edit, eventData);
					});
				this.groupForAppends.push(wrapper.belowText);
			}
		}

		wrapper.g = this.paper.group(wrapper.line)
			.addClass(groupClasses)
			.click(() => {
				this.emit(this.edit, eventData);
			});
		const hookPoint = {
			x: flattedPoints[flattedPoints.length - 2],
			y: flattedPoints[flattedPoints.length - 1],
		};
		wrapper.add = this.drawerDict[GraphShapeType.Add](hookPoint)
			.click((e) => {
				e.stopPropagation();
				this.emit(this.add, eventData);
			});
		wrapper.buttonsG.add(wrapper.add);
		this.groupForAppends.push(wrapper.buttonsG);
		this.paper.prepend(wrapper.g);
	}

	private renderNode(currentNode, level, isPhantom = false) {
		const eventData = { node: currentNode };
		const isInitial = currentNode === this.root;
		const isSystem = currentNode.isSystem;
		const p = this.getPointByLevelAndRow(level, this.row);
		const wrapper: any = { entity: currentNode, isPhantom };
		this.nodeWrappers.push(wrapper);
		const groupClasses = `graph__node-wrapper ${isPhantom ? 'graph__node-wrapper--phantom' : ''}`;
		wrapper.node = this.paper
			.rect(
				p.x - this.options.r,
				p.y - this.options.r,
				150, this.options.r * 2,
				this.options.r, this.options.r)
			.addClass('graph__node');
		let nodeWidth = this.options.nodeStandartWidth;
		wrapper.g = this.paper
			.group(wrapper.node)
			.addClass(groupClasses);
		if (currentNode.title) {
			wrapper.text = this.paper
				.text(p.x, p.y, currentNode.title)
				.addClass('graph__node-text');
			const textLength = wrapper.text.node.getSubStringLength(0, currentNode.title.length);
			const candidateWidth = textLength + this.options.r;
			if (candidateWidth >= nodeWidth) {
				nodeWidth = candidateWidth;
			}
			wrapper.node.attr({ width: nodeWidth });
			wrapper.text.attr({ x: p.x - this.options.r + nodeWidth / 2 });
			wrapper.g.add(wrapper.text);
		}

		if (!isPhantom) {
			if (!isSystem || isInitial) {
				const addPoint = { x: p.x, y: p.y + this.options.r };
				wrapper.add = this.drawerDict[GraphShapeType.Add](addPoint)
					.click((e) => {
						e.stopPropagation();
						this.emit(this.add, eventData);
					});
				wrapper.buttonsG = this.paper.group(wrapper.add)
					.addClass('graph__buttons');
			}
			if (!isSystem) {
				const delta = this.options.r * Math.sin(Math.PI / 4);
				const removePoint = { x: p.x + (nodeWidth - this.options.r * 2) + delta, y: p.y - delta };
				wrapper.remove = this.drawerDict[GraphShapeType.Remove](removePoint)
					.click((e) => {
						e.stopPropagation();
						this.emit(this.remove, eventData);
					});
				wrapper.buttonsG = this.paper.group(wrapper.remove);
			}
			if (wrapper.buttonsG) {
				wrapper.g.add(wrapper.buttonsG);
			}
		}

		if (!isInitial) {
			wrapper.g.click(() => {
				this.emit(this.edit, eventData);
			});
		} else {
			wrapper.g.addClass('graph__node-wrapper--initial');
		}
		if (isPhantom) {
			const targetWrapper = isPhantom ? this.nodeWrappers.find(w => w.entity === currentNode) : wrapper;
			const hoverClass = 'graph__node-wrapper--active';
			wrapper.g.hover(
				() => {targetWrapper.g.addClass(hoverClass);},
				() => {targetWrapper.g.removeClass(hoverClass);},
			);
		}
	}

	private emit(emitter, data) {
		if (!this.disabled) {
			emitter.emit(data);
		}
	}

	private getPointByLevelAndRow(level, row) {
		return {
			x: this.options.startPoint.x + this.options.dx * level,
			y: this.options.startPoint.y + this.options.dy * row,
		};
	}
}
