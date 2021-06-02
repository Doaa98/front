import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewModelImplementedComponent } from './Khamsat Community/Business models implemented/addnew-model-implemented/addnew-model-implemented.component';
import { ModelsImplementedComponent } from './Khamsat Community/Business models implemented/models-implemented/models-implemented.component';

const routes: Routes = [
  {
    path:'ModelImplementd',component:ModelsImplementedComponent
  },
  {
  path:'NewModel',component:AddnewModelImplementedComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
