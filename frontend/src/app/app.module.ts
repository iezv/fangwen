import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UIComponent } from './components/ui/ui.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolBarComponent } from './components/toolbar/toolbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { UserService } from "./services/user.service";
import { MessageService } from "./services/message.service";
import {ItemService} from "./services/item.service";

import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { MywishlistComponent } from './components/mywishlist/mywishlist.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { AdminComponent } from "./components/admin_components/admin/admin.component";
import { AdminUsersComponent } from "./components/admin_components/admin_users/admin_users.component";
import { AdminDashboardComponent } from "./components/admin_components/admin_dashboard/admin_dashboard.component";
import { AdminOrdersComponent } from "./components/admin_components/admin_orders/admin_orders.component";
import { AdminCategoriesComponent } from "./components/admin_components/admin_categories/admin_categories.component";
import { AdminItemsComponent } from "./components/admin_components/admin_items/admin_items.component";


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    UIComponent,
    FooterComponent,
    ToolBarComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    MyaccountComponent,
    MywishlistComponent,
    MycartComponent,
    CheckoutComponent,
    DeliveryComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    AdminComponent,
    AdminUsersComponent,
    AdminDashboardComponent,
    AdminOrdersComponent,
    AdminCategoriesComponent,
    AdminItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [{ provide: LocationStrategy,
                useClass: HashLocationStrategy }, UserService, MessageService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
