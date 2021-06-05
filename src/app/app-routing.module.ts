import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutKhamsatDetailsComponent } from './Khamsat Community/AboutKhamsatModule/about-khamsat-details/about-khamsat-details.component';
import { AboutKhamsatComponent } from './Khamsat Community/AboutKhamsatModule/about-khamsat/about-khamsat.component';
import { AddnewSubjectComponent } from './Khamsat Community/AboutKhamsatModule/addnew-subject/addnew-subject.component';
import { AddnewModelImplementedComponent } from './Khamsat Community/Business models implemented/addnew-model-implemented/addnew-model-implemented.component';
import { ModelsImplementedDetailsComponent } from './Khamsat Community/Business models implemented/models-implemented-details/models-implemented-details.component';
import { ModelsImplementedComponent } from './Khamsat Community/Business models implemented/models-implemented/models-implemented.component';
import { AddnewNotFoundServiceComponent } from './Khamsat Community/NotFoundServiceModule/addnew-not-found-service/addnew-not-found-service.component';
import { AServiceDetailsComponent } from './Khamsat Community/NotFoundServiceModule/aservice-details/aservice-details.component';
import { NotFoundServiceComponent } from './Khamsat Community/NotFoundServiceModule/not-found-service/not-found-service.component';
import { AddnewUserExperienceComponent } from './Khamsat Community/UserExperiencesAndStoriesModule/addnew-user-experience/addnew-user-experience.component';
import { UserExperienceDetailsComponent } from './Khamsat Community/UserExperiencesAndStoriesModule/user-experience-details/user-experience-details.component';
import { UserExperiencesAndStoriesComponent } from './Khamsat Community/UserExperiencesAndStoriesModule/user-experiences-and-stories/user-experiences-and-stories.component';

const routes: Routes = [
  {
    path:'ModelImplementd',component:ModelsImplementedComponent
  },
  {
  path:'NewModel',component:AddnewModelImplementedComponent
  },
  {
    path:'ModelDetails',component:ModelsImplementedDetailsComponent
  },
  {
    path:'aboutKhamsat',component:AboutKhamsatComponent
  },
  {
    path:'NewSubject',component:AddnewSubjectComponent
  },
  {
    path:'KhamsatDetalis',component:AboutKhamsatDetailsComponent
  },
  {
    path:'NotFoundService',component:NotFoundServiceComponent
  },
  {
    path:'AddNotFoundService',component:AddnewNotFoundServiceComponent
  },
  {
    path:'ServiceDetails',component:AServiceDetailsComponent
  },
  {
    path:'UserExp',component:UserExperiencesAndStoriesComponent
  },
  {
    path:'NewUserExp',component:AddnewUserExperienceComponent
  },
  {
    path:'ExpDetails',component:UserExperienceDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
