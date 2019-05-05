import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UIComponent } from './components/ui/ui.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolBarComponent } from './components/toolbar/toolbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    UIComponent,
    FooterComponent,
    ToolBarComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
