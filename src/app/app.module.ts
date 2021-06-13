import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubCategoryServiceListComponent } from './components/sub-category-service-list/sub-category-service-list.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HsoubFooterComponent } from './layout/hsoub-footer/hsoub-footer.component';
import { HomeComponent } from './components/home/home.component';
import { AllServicesHomeComponent } from './components/home/all-services-home/all-services-home.component';
import { ServiceHomeComponent } from './components/home/service-home/service-home.component';
import { CartComponent } from './components/cart/cart.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { ClickOutsideModule } from 'ng-click-outside';
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
    AddnewUserExperienceComponent,
    AddnewNotFoundServiceComponent,
    ServiceDetailsComponent,
    SubCategoryServiceListComponent,
    HeaderComponent,
    FooterComponent,
    HsoubFooterComponent,
    HomeComponent,
    AllServicesHomeComponent,
    ServiceHomeComponent,
    CartComponent,
    AddServiceComponent
    
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
