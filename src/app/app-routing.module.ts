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

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'cart', component: CartPageComponent },

  { path: 'account', component: AccountComponent, canActivate: [AuthService] },
  { path: 'account/info', component: InfoComponent, canActivate: [AuthService] },

  { path: 'manager', component: ManagerComponent },
  { path: 'products/manager', component: ProductsManagerComponent },
  { path: 'products/create', component: AddProductComponent },
  { path: 'products/edit/:id', component: EditProductComponent },
  // {
  //   path: 'manager', component: ManagerComponent
  //   // , canActivate: [AuthService, HasRoleGuard], data: {
  //   //   role: 'admin'
  //   // }
  // },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
