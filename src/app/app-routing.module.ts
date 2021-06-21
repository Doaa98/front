import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewModelImplementedComponent } from './Khamsat Community/Business models implemented/addnew-model-implemented/addnew-model-implemented.component';
import { ModelsImplementedComponent } from './Khamsat Community/Business models implemented/models-implemented/models-implemented.component';
import { NewServiceComponent } from './components/new-service/new-service.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { SubCategoryServiceListComponent } from './components/sub-category-service-list/sub-category-service-list.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { NotificationComponent } from './components/notification/notification.component';
import { MessagesComponent } from './components/message/messages/messages.component';
import { MessageComponent } from './components/message/message/message.component';
import { NewChatComponent } from './components/message/new-chat/new-chat.component';

const routes: Routes = [
  {
    path: 'ModelImplementd', component: ModelsImplementedComponent
  },
  {
    path: 'NewModel', component: AddnewModelImplementedComponent
  },
  { path: 'cart', component: CartComponent },
  { path: 'service/new', component: NewServiceComponent },
  { path: 'service/Details/:id', component: ServiceDetailsComponent },
  { path: 'SubCategory/:id', component: SubCategoryServiceListComponent },
  { path: 'Category/:catId', component: SubCategoryServiceListComponent },
  { path: 'notifications', component: NotificationComponent },
  { path: 'message/new', component: NewChatComponent },

  { path: 'messages', component: MessagesComponent },
  { path: 'message/:ChatId', component: MessageComponent },
  { path: 'message/new/:id', component: NewChatComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
