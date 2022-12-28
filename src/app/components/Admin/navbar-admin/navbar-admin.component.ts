import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {
  adminData: any;
  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getInfoCustomer().subscribe((data: any) => {
      this.adminData = data;
    })
  }

}
