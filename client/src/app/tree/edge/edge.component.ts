import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseComponent } from '../../core/base.component';
@Component({
	selector: 'edge',
	templateUrl: 'edge.component.html',
	styleUrls: ['../tree.scss'],
})
export class EdgeComponent extends BaseComponent implements OnInit {
	_nodes: any;
	@Input() edges: any;

	@Output() edit: EventEmitter<any> = new EventEmitter();
	@Output() add: EventEmitter<any> = new EventEmitter();

	@Input()
	set options(options) {
		this._options = {...this._options, ...options};
		this.applyOptions();
	}

	@Input()
	set edge(edge) {
		this._edge = edge;
		if (this._options) {
			this.applyOptions();
		}
	}
	get edge() { return this._edge; }

	@Input()
	set nodes(nodes) {
		this._nodes = nodes;
		if (this._options) {
			this.applyOptions();
		}
	}
	get nodes() { return this._nodes; }

	private isNextNodeInitial: boolean;
	private _nextNode: any;
	private _edge: any;
	private _options = {
		keyProp: 'id',
		displayProp: 'text',
	};

	constructor() { super(); }

	ngOnInit() { }

	private applyOptions() {
		if (this.nodes && this._edge) {
			this._nextNode = this.nodes.find(node => node.id === this._edge.toState);
			this.isNextNodeInitial = !this._nextNode;
		}
	}

}
