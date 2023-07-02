import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PwdgeneratorComponent } from './pwdgenerator/pwdgenerator.component';
import { NewpassGeneratorComponent } from './newpass-generator/newpass-generator.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { CountryStateListComponent } from './country-state-list/country-state-list.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { CustomDirective } from './custom.directive';
import { StructuralDirectivesAssComponent } from './structural-directives-ass/structural-directives-ass.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DomainValidationComponent } from './domain-validation/domain-validation.component';
import { TemplateRegFormAssignComponent } from './template-reg-form-assign/template-reg-form-assign.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { MyserviceService } from './services/my-service.service';
import { ReactiveFormAssiComponent } from './reactive-form-assi/reactive-form-assi.component';
import { TestingFormComponent } from './testing-form/testing-form.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { TodoComponent } from './todo/todo.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GiphyComponent } from './giphy/giphy.component';
import { WikipediaComponent } from './wikipedia/wikipedia.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { PipeComponent } from './pipe/pipe.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    PwdgeneratorComponent,
    NewpassGeneratorComponent,
    NgIfComponent,
    NgForComponent,
    NgswitchComponent,
    CountryStateListComponent,
    NgstyleComponent,
    NgClassComponent,
    CustomDirective,
    StructuralDirectivesAssComponent,
    TemplateformComponent,
    DomainValidationComponent,
    TemplateRegFormAssignComponent,
    ReactiveformComponent,
    Service1Component,
    Service2Component,
    ReactiveFormAssiComponent,
    TestingFormComponent,
    PostComponent,
    TodoComponent,
    RapidapiComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    PagenotfoundComponent,
    GiphyComponent,
    WikipediaComponent,
    TestcomponentComponent,
    PostlistComponent,
    PostdetailsComponent,
    PipeComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
