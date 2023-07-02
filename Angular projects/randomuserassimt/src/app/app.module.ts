import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomuserComponent } from './randomuser/randomuser.component';
import { HttpClientModule } from '@angular/common/http';
import { RxjsComponent } from './rxjs/rxjs.component';
import { TaskmanagerassiComponent } from './taskmanagerassi/taskmanagerassi.component';
import { AngularmaterialComponent } from './angularmaterial/angularmaterial.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    RandomuserComponent,
    RxjsComponent,
    TaskmanagerassiComponent,
    AngularmaterialComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
