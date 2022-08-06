import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseComponent } from '../../core/base.component';

@Component({
	selector: 'node',
	templateUrl: 'node.component.html',
	styleUrls: ['../tree.scss'],
})
export class NodeComponent  extends BaseComponent implements OnInit {
	@Input() node: any;

	@Output() edit: EventEmitter<any> = new EventEmitter();
	@Output() add: EventEmitter<any> = new EventEmitter();

	// TODO create interfaces for it
	@Input()
	set options(options) {
		this._options = {...this._options, ...options};
		this.applyOptions();
	}

	@Input() nodes: any[];

	@Input()
	set edges(edges) {
		if (!edges) {
			this._edges = [];
			return;
		}
		this._edges = edges;
		if (this._options) {
			this.applyOptions();
		}
	}

	private _edges: any[];
	private _rootEdges: any[];
	private _childEdges: any[];
	private _options = {
		keyProp: 'id',
		parentKeyProp: 'parentId',
		displayProp: 'text',
	};

	constructor() { super(); }

	ngOnInit() { }
	editFn() {
		if (this.node.title === 'InitialState') return;
		this.edit.emit({node: this.node});
	}

	private applyOptions() {
		if (this._edges && this.node) {
			this._rootEdges = this._edges.filter(trans => trans.fromState === this.node.id);
			this._childEdges = this._edges.filter(trans => !this._rootEdges.includes(trans));
		}
	}

}
