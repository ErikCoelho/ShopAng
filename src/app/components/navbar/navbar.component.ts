import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loged = false;
  constructor() { }

  ngOnInit() {
    if (!localStorage.getItem('shop.token')) {
      this.loged = false;
    } else {
      this.loged = true;
    }
  }

}
