import { NgModule } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin_components/admin/admin.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { MywishlistComponent } from './components/mywishlist/mywishlist.component';
import { RegisterComponent} from './components/register/register.component';

import { RouterModule, Routes } from '@angular/router';
// import { AdminUsersComponent } from "./components/admin_components/admin_users/admin_users.component";

// , canActivate: [AuthGuard]
const routes: Routes = [
  { path: '',  component: HomepageComponent, pathMatch: 'full'},
  { path: 'login',  component: LoginComponent },
  { path: 'myaccount',  component: MyaccountComponent },
  { path: 'mywishlist',  component: MywishlistComponent },
  { path: 'mycart',  component: MycartComponent },
  { path: 'checkout',  component: CheckoutComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'delivery',  component: DeliveryComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'register',  component: RegisterComponent },
  { path: 'admin',  component: AdminComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
})

export class AppRoutingModule { }
