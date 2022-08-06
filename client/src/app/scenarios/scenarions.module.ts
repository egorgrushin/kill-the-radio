import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ScenariosRoutingModule } from './scenarios.routing-module';
import { ScenariosComponent } from './scenarios/scenarios.component';
import { ScenariosDetailsComponent } from './scenarios-details/scenarios-details.component';
import { CoreModule } from '../core/core.module';

@NgModule({
	imports: [
		SharedModule,
		CoreModule,
		ScenariosRoutingModule,
	],
	declarations: [
		ScenariosComponent,
		ScenariosDetailsComponent,
	],
})
export class ScenariosModule {}
