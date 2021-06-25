import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AboutKhamsatComponent } from './Khamsat Community/AboutKhamsatModule/about-khamsat/about-khamsat.component';
import { AddnewSubjectComponent } from './Khamsat Community/AboutKhamsatModule/addnew-subject/addnew-subject.component';
import { ModelsImplementedComponent } from './Khamsat Community/Business models implemented/models-implemented/models-implemented.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HsoubHeaderComponent } from './hsoub-header/hsoub-header.component';
import { NotFoundServiceComponent } from './Khamsat Community/NotFoundServiceModule/not-found-service/not-found-service.component';
import { UserExperiencesAndStoriesComponent } from './Khamsat Community/UserExperiencesAndStoriesModule/user-experiences-and-stories/user-experiences-and-stories.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { ModelsImplementedDetailsComponent } from './Khamsat Community/Business models implemented/models-implemented-details/models-implemented-details.component';
import { AboutKhamsatDetailsComponent } from './Khamsat Community/AboutKhamsatModule/about-khamsat-details/about-khamsat-details.component';
import { AServiceDetailsComponent } from './Khamsat Community/NotFoundServiceModule/aservice-details/aservice-details.component';
import { UserExperienceDetailsComponent } from './Khamsat Community/UserExperiencesAndStoriesModule/user-experience-details/user-experience-details.component';
import { SubCategoryServiceListComponent } from './components/sub-category-service-list/sub-category-service-list.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { NotificationComponent } from './components/notification/notification.component';
import { MessagesComponent } from './components/message/messages/messages.component';
import { NewChatComponent } from './components/message/new-chat/new-chat.component';
import { MessageComponent } from './components/message/message/message.component';
import { KhamsatDotComComponent } from './khamsat-dot-com/khamsat-dot-com.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { PrivacyDataComponent } from './components/privacy-data/privacy-data.component';




const routes: Routes = [
   {path:'terms', component:TermsOfUseComponent},
   {path:'privacy', component:PrivacyDataComponent},


   { path: 'home', component: HomeComponent },
  {path: '', component: KhamsatDotComComponent},

  {path:'register',component:RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'head',component:HsoubHeaderComponent},
  {
    path: 'ModelImplementd', component: ModelsImplementedComponent
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
  { path: 'cart', component: CartComponent },

  { path: 'service/Details/:id', component: ServiceDetailsComponent },
  { path: 'SubCategory/:id', component: SubCategoryServiceListComponent },
  { path: 'Category/:catId', component: SubCategoryServiceListComponent },
  { path: 'notifications', component: NotificationComponent },
  { path: 'service/add', component: AddServiceComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'message/:ChatId', component: MessageComponent },
  { path: 'message/new/:id', component: NewChatComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
