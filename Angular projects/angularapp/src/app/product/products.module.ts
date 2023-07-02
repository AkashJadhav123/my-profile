import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileComponent } from './mobile/mobile.component';
import { TvComponent } from './tv/tv.component';
import { LaptopComponent } from './laptop/laptop.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';

// const prodRoutes : Routes=[
// { path: 'product',component: ProductComponent, children: [  // localhost:4200/product
// {path : 'laptop', component: LaptopComponent},
// {path: 'tv', component: TvComponent},                    //for multiple router outlet
// {path: 'mobile', component: MobileComponent},
// {path: 'washingmachine', component: WashingmachineComponent}
// ]},
// ]

const prodRoutes : Routes = [
  { path: '', component: ProductComponent, children: [ // localhost:4200/product
    {path : 'laptop', component: LaptopComponent},
    {path: 'tv', component: TvComponent},
    {path: 'mobile', component: MobileComponent},
    {path: 'washingmachine', component: WashingmachineComponent}
  ]},
]

@NgModule({
  declarations: [  ProductComponent,
    MobileComponent,
    TvComponent,
    LaptopComponent,
    WashingmachineComponent,
  ],
  imports: [
  CommonModule,
     RouterModule.forChild(prodRoutes)
],
// exports:[RouterModule]
})
export class ProductsModule {

  constructor() {
    console.log('ProductsModule called');
  }
}


