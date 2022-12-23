import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Customer } from 'src/app/models/customer.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  public customer: any | undefined;
  public form!: FormGroup;
  constructor(
    private service: DataService
  ) { }

  ngOnInit() {
    this.service.getInfoCustomer().subscribe((data: any) => {
      console.log(data);
      this.customer = data;

    })

  }

  get fistName() {
    return this.form.get('fistName')!;
  }

  get lastName() {
    return this.form.get('lastName')!;
  }

  get document() {
    return this.form.get('cpf')!;
  }

  get email() {
    return this.form.get('email')!;
  }


  // infos(data) {
  //   this.form.disabled
  //   this.email.value = 
  // }

}
