import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductComponent } from './product/product.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { TvComponent } from './product/tv/tv.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';


const routes : Routes = [
  { path:'', redirectTo: 'login', pathMatch: 'full'},        // localhost:4200
  { path: 'login', component: LoginComponent}, 
  { path: 'about-us', component: AboutusComponent},          // localhost:4200/about-us
  { path: 'contact-us', component: ContactusComponent},
  // { path: 'product', children: [                          // localhost:4200/product
  //   { path: '', component: ProductComponent},
  //   {path : 'laptop', component: LaptopComponent},
  //   {path: 'tv', component: TvComponent},
  //   {path: 'mobile', component: MobileComponent},
  //   {path: 'washingmachine', component: WashingmachineComponent}
  // ]},    For single routel outlet

  {path: 'product', loadChildren: './product/products.module#ProductsModule'},
  { path: 'posts', component: PostlistComponent},
  {path: 'postdetails/:id', component: PostdetailsComponent},
  
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor()
  {
    console.log("app routing is called");
    
  }
}
