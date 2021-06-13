import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutKhamsatDetailsComponent } from './Khamsat Community/AboutKhamsatModule/about-khamsat-details/about-khamsat-details.component';
import { ModelsImplementedDetailsComponent } from './Khamsat Community/Business models implemented/models-implemented-details/models-implemented-details.component';
import { AServiceDetailsComponent } from './Khamsat Community/NotFoundServiceModule/aservice-details/aservice-details.component';
import { UserExperienceDetailsComponent } from './Khamsat Community/UserExperiencesAndStoriesModule/user-experience-details/user-experience-details.component';
import { NewServiceComponent } from './components/new-service/new-service.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { AboutKhamsatComponent } from './components/Khamsat Community/AboutKhamsatModule/about-khamsat/about-khamsat.component';
import { ModelsImplementedComponent } from './components/Khamsat Community/Business models implemented/models-implemented/models-implemented.component';
import { AddnewSubjectComponent } from './components/Khamsat Community/AboutKhamsatModule/addnew-subject/addnew-subject.component';
import { NotFoundServiceComponent } from './components/Khamsat Community/NotFoundServiceModule/not-found-service/not-found-service.component';
import { UserExperiencesAndStoriesComponent } from './components/Khamsat Community/UserExperiencesAndStoriesModule/user-experiences-and-stories/user-experiences-and-stories.component';

const routes: Routes = [
  {
    path:'ModelImplementd',component:ModelsImplementedComponent
  },
  {
    path:'ModelDetails/:id',component:ModelsImplementedDetailsComponent
  },
  {
    path:'aboutKhamsat',component:AboutKhamsatComponent
  },
  {
    path:'NewSubject',component:AddnewSubjectComponent
  },
  {
    path:'KhamsatDetalis/:id',component:AboutKhamsatDetailsComponent
  },
  {
    path:'NotFoundService',component:NotFoundServiceComponent
  },

  {
    path:'ServiceDetails/:id',component:AServiceDetailsComponent
  },
  {
    path:'UserExp',component:UserExperiencesAndStoriesComponent
  },

  {
    path:'ExpDetails/:id',component:UserExperienceDetailsComponent
  },
  { path: 'service/new', component: NewServiceComponent },
  { path: 'service/Details/:id', component: ServiceDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
