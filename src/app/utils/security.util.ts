// import { Customer } from "../models/customer.model";

// export class Security {
//     public static set(customer: Customer, token: string) {
//         const data = JSON.stringify(customer);

//         localStorage.setItem('shopcustomer', btoa(data));
//         localStorage.setItem('shoptoken', token);
//     }

//     public static setCustomer(customer: Customer) {
//         const data = JSON.stringify(customer);
//         localStorage.setItem('petshopuser', btoa(data));
//     }

//     public static setToken(token: string) {
//         localStorage.setItem('petshoptoken', token);
//     }

//     public static getCustomer(): Customer {
//         const data = localStorage.getItem('petshopuser');
//         if (data) {
//             return JSON.parse(atob(data));
//         } else {
//             return null;
//         }
//     }

//     public static getToken(): any {
//         const data = localStorage.getItem('petshoptoken');
//         if (data) {
//             return data;
//         } else {
//             return null;
//         }
//     }

//     public static hasToken(): boolean {
//         if (this.getToken())
//             return true;
//         else
//             return false;
//     }

//     public static clear() {
//         localStorage.removeItem('petshopuser');
//         localStorage.removeItem('petshoptoken');
//     }
// }