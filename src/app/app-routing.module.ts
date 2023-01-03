import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/AccountData/account/account.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/AccountData/info/info.component';
import { LoginComponent } from './pages/login/login.component';
import { ManagerComponent } from './pages/Admin/manager/manager.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductComponent } from './pages/product/product.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthService } from './services/auth.service';
import { HasRoleGuard } from './services/has-role.guard';
import { ProductsManagerComponent } from './pages/Admin/products-manager/products-manager.component';
import { AddProductComponent } from './pages/Admin/add-product/add-product.component';
import { EditProductComponent } from './pages/Admin/edit-product/edit-product.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PurchasedComponent } from './pages/purchased/purchased.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { OrdersComponent } from './pages/AccountData/orders/orders.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },

  { path: 'cart', component: CartPageComponent },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthService] },
  { path: "purchased", component: PurchasedComponent, canActivate: [AuthService] },

  { path: 'account', component: AccountComponent, canActivate: [AuthService] },
  { path: 'account/info', component: InfoComponent, canActivate: [AuthService] },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthService] },

  {
    path: 'manager', component: ManagerComponent, canActivate: [AuthService, HasRoleGuard], data: {
      role: 'admin'
    }
  },
  {
    path: 'products/manager', component: ProductsManagerComponent, canActivate: [AuthService, HasRoleGuard], data: {
      role: 'admin'
    }
  },
  {
    path: 'products/create', component: AddProductComponent, canActivate: [AuthService, HasRoleGuard], data: {
      role: 'admin'
    }
  },
  {
    path: 'products/edit/:id', component: EditProductComponent, canActivate: [AuthService, HasRoleGuard], data: {
      role: 'admin'
    }
  },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
