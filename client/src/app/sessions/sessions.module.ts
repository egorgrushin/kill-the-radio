import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SessionsRoutingModule } from './sessions.routing-module';
import { SessionsDetailsComponent } from './sessions-details/sessions-details.component';
import { CoreModule } from '../core/core.module';

@NgModule({
	imports: [
		SharedModule,
		CoreModule,
		SessionsRoutingModule,
	],
	declarations: [
		SessionsDetailsComponent,
	],
})
export class SessionsModule {}
