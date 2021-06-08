import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutKhamsatComponent } from './components/Khamsat Community/AboutKhamsatModule/about-khamsat/about-khamsat.component';
import { NotFoundServiceComponent } from './components/Khamsat Community/NotFoundServiceModule/not-found-service/not-found-service.component';
import { ModelsImplementedComponent } from './components/Khamsat Community/Business models implemented/models-implemented/models-implemented.component';
import { UserExperiencesAndStoriesComponent } from './components/Khamsat Community/UserExperiencesAndStoriesModule/user-experiences-and-stories/user-experiences-and-stories.component';
import { AddnewModelImplementedComponent } from './components/Khamsat Community/Business models implemented/addnew-model-implemented/addnew-model-implemented.component';
import { AddnewSubjectComponent } from './components/Khamsat Community/AboutKhamsatModule/addnew-subject/addnew-subject.component';
import { AddnewNotFoundServiceComponent } from './components/Khamsat Community/NotFoundServiceModule/addnew-not-found-service/addnew-not-found-service.component';
import { AddnewUserExperienceComponent } from './components/Khamsat Community/UserExperiencesAndStoriesModule/addnew-user-experience/addnew-user-experience.component';


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
