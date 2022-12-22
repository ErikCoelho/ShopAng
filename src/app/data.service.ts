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
    const headers = new HttpHeaders().set('Authorization', `bearer ${token}`);
    return headers;
  }

  // Product Controller 
  public getProducts() {
    return this.http.get(`${this.baseUrl}/v1/products`);
  }

  public getProductById(id: string) {
    return this.http.get(`${this.baseUrl}/v1/products/${id}`);
  }

  // Customer Controller
  public login(form: any) {
    return this.http.post(`${this.baseUrl}/v1/account/login`, form);
  }
}
