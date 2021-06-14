import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { SubCategoryServiceListComponent } from './components/sub-category-service-list/sub-category-service-list.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { NotificationComponent } from './components/notification/notification.component';
import { AddServiceComponent } from './components/add-service/add-service.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'service/Details/:id', component: ServiceDetailsComponent },
  { path: 'SubCategory/:id', component: SubCategoryServiceListComponent },
  { path: 'Category/:catId', component: SubCategoryServiceListComponent },
  { path: 'notifications', component: NotificationComponent },
  { path: 'service/add', component: AddServiceComponent },
  { path: 'service/Details/:id', component: ServiceDetailsComponent },
  { path: 'SubCategory/:id', component: SubCategoryServiceListComponent },
  { path: 'service/new', component: AddServiceComponent },
  { path: 'service/Details/:id', component: ServiceDetailsComponent },

  { path: 'cart', component: CartComponent },
  { path: 'service/Details/:id', component: ServiceDetailsComponent },
  { path: 'SubCategory/:id', component: SubCategoryServiceListComponent },
  { path: 'Category/:catId', component: SubCategoryServiceListComponent },
  { path: 'notifications', component: NotificationComponent },

  { path: 'service/add', component: AddServiceComponent },
  { path: 'service/Details/:id', component: ServiceDetailsComponent },
  { path: 'SubCategory/:id', component: SubCategoryServiceListComponent },
  
  // {
  //   path:'aboutKhamsat',component:AboutKhamsatComponent
  // },
  // { path: '', component: HomeComponent },
  // {
  //   path:'ModelDetails/:id',component:ModelsImplementedDetailsComponent
  // },
  // {
  //   path:'aboutKhamsat',component:AboutKhamsatComponent
  // },
  // {
  //   path:'NewSubject',component:AddnewSubjectComponent
  // },
  // {
  //   path:'KhamsatDetalis/:id',component:AboutKhamsatDetailsComponent
  // },
  // {
  //   path:'NotFoundService',component:NotFoundServiceComponent
  // },

  // {
  //   path:'ServiceDetails/:id',component:AServiceDetailsComponent
  // },
  // {
  //   path:'UserExp',component:UserExperiencesAndStoriesComponent
  // },

  // {
  //   path:'ExpDetails/:id',component:UserExperienceDetailsComponent
  // },

  { path: 'service/Details/:id', component: ServiceDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
