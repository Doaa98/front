import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutKhamsatComponent } from './Khamsat Community/AboutKhamsatModule/about-khamsat/about-khamsat.component';
import { AddnewSubjectComponent } from './Khamsat Community/AboutKhamsatModule/addnew-subject/addnew-subject.component';
import { AddnewModelImplementedComponent } from './Khamsat Community/Business models implemented/addnew-model-implemented/addnew-model-implemented.component';
import { ModelsImplementedComponent } from './Khamsat Community/Business models implemented/models-implemented/models-implemented.component';
import { AddnewNotFoundServiceComponent } from './Khamsat Community/NotFoundServiceModule/addnew-not-found-service/addnew-not-found-service.component';
import { NotFoundServiceComponent } from './Khamsat Community/NotFoundServiceModule/not-found-service/not-found-service.component';
import { AddnewUserExperienceComponent } from './Khamsat Community/UserExperiencesAndStoriesModule/addnew-user-experience/addnew-user-experience.component';
import { UserExperiencesAndStoriesComponent } from './Khamsat Community/UserExperiencesAndStoriesModule/user-experiences-and-stories/user-experiences-and-stories.component';
import { AboutKhamsatDetailsComponent } from './Khamsat Community/AboutKhamsatModule/about-khamsat-details/about-khamsat-details.component';
import { ModelsImplementedDetailsComponent } from './Khamsat Community/Business models implemented/models-implemented-details/models-implemented-details.component';
import { AServiceDetailsComponent } from './Khamsat Community/NotFoundServiceModule/aservice-details/aservice-details.component';
import { UserExperienceDetailsComponent } from './Khamsat Community/UserExperiencesAndStoriesModule/user-experience-details/user-experience-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutKhamsatComponent,
    NotFoundServiceComponent,
    ModelsImplementedComponent,
    UserExperiencesAndStoriesComponent,
    AddnewModelImplementedComponent,
    AddnewSubjectComponent,
    AddnewNotFoundServiceComponent,
    AddnewUserExperienceComponent,
    AboutKhamsatDetailsComponent,
    ModelsImplementedDetailsComponent,
    AServiceDetailsComponent,
    UserExperienceDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
