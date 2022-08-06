import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionsDetailsComponent } from './sessions-details/sessions-details.component';

const routes: Routes = [
	{ path: 'sessions/:id', component: SessionsDetailsComponent, pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SessionsRoutingModule {}
