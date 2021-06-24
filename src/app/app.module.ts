import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutKhamsatComponent } from './Khamsat Community/AboutKhamsatModule/about-khamsat/about-khamsat.component';
import { AddnewSubjectComponent } from './Khamsat Community/AboutKhamsatModule/addnew-subject/addnew-subject.component';
import { ModelsImplementedComponent } from './Khamsat Community/Business models implemented/models-implemented/models-implemented.component';
import { NotFoundServiceComponent } from './Khamsat Community/NotFoundServiceModule/not-found-service/not-found-service.component';
import { UserExperiencesAndStoriesComponent } from './Khamsat Community/UserExperiencesAndStoriesModule/user-experiences-and-stories/user-experiences-and-stories.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { KhamsatDotComComponent } from './khamsat-dot-com/khamsat-dot-com.component';
import { HsoubHeaderComponent } from './hsoub-header/hsoub-header.component';
import { AboutKhamsatDetailsComponent } from './Khamsat Community/AboutKhamsatModule/about-khamsat-details/about-khamsat-details.component';
import { ModelsImplementedDetailsComponent } from './Khamsat Community/Business models implemented/models-implemented-details/models-implemented-details.component';
import { AServiceDetailsComponent } from './Khamsat Community/NotFoundServiceModule/aservice-details/aservice-details.component';
import { UserExperienceDetailsComponent } from './Khamsat Community/UserExperiencesAndStoriesModule/user-experience-details/user-experience-details.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { SubCategoryServiceListComponent } from './components/sub-category-service-list/sub-category-service-list.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HsoubFooterComponent } from './layout/hsoub-footer/hsoub-footer.component';
import { HomeComponent } from './components/home/home.component';
import { AllServicesHomeComponent } from './components/home/all-services-home/all-services-home.component';
import { ServiceHomeComponent } from './components/home/service-home/service-home.component';
import { CartComponent } from './components/cart/cart.component';
import { CustomDatePipe } from './Pipe/custom-date.pipe';
import { NotificationComponent } from './components/notification/notification.component';
import { MessagesComponent } from './components/message/messages/messages.component';
import { MessageComponent } from './components/message/message/message.component';
import { NewChatComponent } from './components/message/new-chat/new-chat.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  declarations: [
    AppComponent,
    AboutKhamsatComponent,
    NotFoundServiceComponent,
    ModelsImplementedComponent,
    UserExperiencesAndStoriesComponent,
    AddnewSubjectComponent,

    RegisterComponent,
    LoginComponent,
    HsoubHeaderComponent,
    KhamsatDotComComponent,

    AboutKhamsatDetailsComponent,
    ModelsImplementedDetailsComponent,
    AServiceDetailsComponent,
    UserExperienceDetailsComponent,
    ServiceDetailsComponent,
    SubCategoryServiceListComponent,
    HeaderComponent,
    FooterComponent,
    HsoubFooterComponent,
    HomeComponent,
    AllServicesHomeComponent,
    ServiceHomeComponent,
    CartComponent,
    CustomDatePipe,
    NotificationComponent,
    MessagesComponent,
    MessageComponent,
    NewChatComponent,
    AddServiceComponent,
  ],

  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    ClickOutsideModule
  ],
  providers: [
     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ReactiveFormsModule,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
