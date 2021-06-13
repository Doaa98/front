import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { SubCategoryServiceListComponent } from './components/sub-category-service-list/sub-category-service-list.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { AboutKhamsatComponent } from './components/Khamsat Community/AboutKhamsatModule/about-khamsat/about-khamsat.component';
import { ModelsImplementedComponent } from './components/Khamsat Community/Business models implemented/models-implemented/models-implemented.component';
import { AddnewModelImplementedComponent } from './components/Khamsat Community/Business models implemented/addnew-model-implemented/addnew-model-implemented.component';

const routes: Routes = [
  {
    path: 'ModelImplementd',
    component: ModelsImplementedComponent,
  },
  {
    path: 'NewModel',
    component: AddnewModelImplementedComponent,
  },
  { path: 'cart', component: CartComponent },

  { path: 'service/add', component: AddServiceComponent },
  { path: 'service/Details/:id', component: ServiceDetailsComponent },
  { path: 'SubCategory/:id', component: SubCategoryServiceListComponent },
  {
    path:'aboutKhamsat',component:AboutKhamsatComponent
  },
  { path: '', component: HomeComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
