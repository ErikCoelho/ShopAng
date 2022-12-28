import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Customer } from "../models/customer.model";

@Injectable()
export class AuthService implements CanActivate {
    user!: Customer | null;
    constructor(private router: Router) {
    }

    get token(): any {
        return localStorage.getItem('shop.token');
    }

    canActivate() {
        if (!this.token) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }

    login(data: any) {
        localStorage.setItem('shop.token', data.data);
        this.user = this.getUser(this.token);
    }

    getUser(token: string): Customer | null {
        if (!token) {
            return null
        }
        console.log(atob(token.split('.')[1]));
        return JSON.parse(atob(token.split('.')[1])) as Customer;
    }
}