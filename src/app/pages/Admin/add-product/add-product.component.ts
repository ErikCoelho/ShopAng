import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public Form!: FormGroup;
  public busy = false;
  public message!: string;
  public added = false;
  constructor(
    private service: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.Form = new FormGroup({
      image: new FormControl('', Validators.compose([
        Validators.required
      ])),
      title: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])),
      description: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required,
      ])),
      price: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      active: new FormControl('', Validators.compose([
        Validators.required
      ])),

    })
  }

  get image() {
    return this.Form.get('image')!;
  }

  get title() {
    return this.Form.get('title')!;
  }

  get description() {
    return this.Form.get('description')!;
  }

  get price() {
    return this.Form.get('price')!;
  }

  get active() {
    return this.Form.get('active')!;
  }

  submit() {
    this.busy = true;
    if (this.Form.invalid) {
      this.busy = false;
      return;
    }

    this.service.postProduct(this.Form.value)
      .subscribe((data: any) => {
        this.added = true;
        this.message = "Produto Criado";
        setTimeout(() => {
          this.added = false;
        }, 1400);
        this.busy = false;
        this.router.navigate(['/products/manager']);
      });
  }

}
