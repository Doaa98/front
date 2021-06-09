import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AboutKhamsatComponent } from './Khamsat Community/AboutKhamsatModule/about-khamsat/about-khamsat.component';
import { AddnewModelImplementedComponent } from './Khamsat Community/Business models implemented/addnew-model-implemented/addnew-model-implemented.component';
import { ModelsImplementedComponent } from './Khamsat Community/Business models implemented/models-implemented/models-implemented.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // {
  //   path:'ModelImplementd',component:ModelsImplementedComponent
  // },
  // {
  // path:'NewModel',component:AddnewModelImplementedComponent
  // },
  // {
  //   path:'aboutKhamsat',component:AboutKhamsatComponent
  // },
  {
    path:'register',component:RegisterComponent
  },
  {path:'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
