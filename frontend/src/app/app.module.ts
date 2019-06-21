import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UIComponent } from './components/ui/ui.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolBarComponent } from './components/toolbar/toolbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { UserService } from "./services/user.service";
import {HttpClientModule} from "@angular/common/http";
import {MessageService} from "./services/message.service";
import {LeftnavComponent} from "./components/leftnav/leftnav.component";
import {FiltresComponent} from "./components/filtres/filtres.component";

@NgModule({
  declarations: [
    AppComponent,
    UIComponent,
    FooterComponent,
    ToolBarComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    LeftnavComponent,
    FiltresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [{ provide: LocationStrategy,
                useClass: HashLocationStrategy }, UserService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
