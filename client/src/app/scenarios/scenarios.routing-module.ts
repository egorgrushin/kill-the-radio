import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScenariosComponent } from './scenarios/scenarios.component';
import { ScenariosDetailsComponent } from './scenarios-details/scenarios-details.component';

const routes: Routes = [
	{ path: 'scenarios/:id', component: ScenariosDetailsComponent, pathMatch: 'full' },
	{ path: 'scenarios', component: ScenariosComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ScenariosRoutingModule {}
