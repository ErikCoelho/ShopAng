import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public baseUrl = "http://localhost:5108";

  constructor(
    private http: HttpClient
  ) { }

  public composeHeaders() {
    const token = localStorage.getItem('shop.token')!;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return headers;
  }


  // Product Controller 
  public getProducts() {
    return this.http.get(`${this.baseUrl}/v1/products`);
  }

  public getInactiveProducts() {
    return this.http.get(`${this.baseUrl}/v1/products/inactive`, { headers: this.composeHeaders() });
  }

  public getProductById(id: string) {
    return this.http.get(`${this.baseUrl}/v1/products/${id}`);
  }

  public postProduct(form: any) {
    return this.http.post(`${this.baseUrl}/v1/products`, form, { headers: this.composeHeaders() });
  }

  public putProduct(form: any, id: string) {
    return this.http.put(`${this.baseUrl}/v1/products/${id}`, form, { headers: this.composeHeaders() });
  }

  public deleteProduct(id: string) {
    return this.http.delete(`${this.baseUrl}/v1/products/${id}`, { headers: this.composeHeaders() });
  }

  // Customer Controller
  public login(form: any) {
    return this.http.post(`${this.baseUrl}/v1/account/login`, form);
  }

  public createAccount(form: any) {
    return this.http.post(`${this.baseUrl}/v1/account/create`, form);
  }

  public getInfoCustomer() {
    return this.http.get(`${this.baseUrl}/v1/account/info`, { headers: this.composeHeaders() });
  }

  // Order Controller
  public createOrder(items: any) {
    return this.http.post(`${this.baseUrl}/v1/orders`, items, { headers: this.composeHeaders() });
  }

  public getOrders() {
    return this.http.get(`${this.baseUrl}/v1/orders`, { headers: this.composeHeaders() });
  }
}
