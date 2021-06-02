import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewModelImplementedComponent } from './Khamsat Community/Business models implemented/addnew-model-implemented/addnew-model-implemented.component';
import { ModelsImplementedComponent } from './Khamsat Community/Business models implemented/models-implemented/models-implemented.component';
import { NewServiceComponent } from './components/new-service/new-service.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';

const routes: Routes = [
  {
    path:'ModelImplementd',component:ModelsImplementedComponent
  },
  {
  path:'NewModel',component:AddnewModelImplementedComponent
  },
  { path: 'service/new', component: NewServiceComponent },
  { path: 'service/Details/:id', component: ServiceDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
