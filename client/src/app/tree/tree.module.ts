import { NgModule } from '@angular/core';

import { NodeComponent } from './node/node.component';
import { EdgeComponent } from './edge/edge.component';
import { EditorComponent } from './editor/editor.component';
import { SharedModule } from '../shared/shared.module';
import { GraphComponent } from './graph/graph.component';

@NgModule({
	imports: [SharedModule],
	exports: [NodeComponent, EdgeComponent, EditorComponent, GraphComponent],
	declarations: [NodeComponent, EdgeComponent, EditorComponent, GraphComponent],
	providers: [],
	entryComponents: [EditorComponent],
})
export class TreeModule {}
