import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { MaskDirective } from './directives/mask.directive';
import { AccountComponent } from './pages/AccountData/account/account.component';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { InfoComponent } from './pages/AccountData/info/info.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ManagerComponent } from './pages/Admin/manager/manager.component';
import { HasRoleGuard } from './services/has-role.guard';
import { NavbarAdminComponent } from './components/Admin/navbar-admin/navbar-admin.component';
import { SideBarAdminComponent } from './components/Admin/side-bar-admin/side-bar-admin.component';
import { ProductsManagerComponent } from './pages/Admin/products-manager/products-manager.component';
import { AddProductComponent } from './pages/Admin/add-product/add-product.component';
import { NotificationComponent } from './components/notification/notification.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    MaskDirective,
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
    ProductComponent,
    LoginComponent,
    SignupComponent,
    LoadingComponent,
    AccountComponent,
    InfoComponent,
    SidebarComponent,
    CartPageComponent,
    NotFoundComponent,
    ManagerComponent,
    NavbarAdminComponent,
    SideBarAdminComponent,
    ProductsManagerComponent,
    AddProductComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    DataService,
    AuthService,
    HasRoleGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
