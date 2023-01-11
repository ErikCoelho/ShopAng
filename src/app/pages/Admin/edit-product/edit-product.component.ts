import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public Form!: FormGroup;
  public busy = false;
  public message!: string;
  public added = false;
  public productData!: any;

  constructor(private service: DataService,
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getProduct();
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

    setTimeout(() => {
      this.Form.patchValue({
        image: this.productData.image,
        title: this.productData.title,
        description: this.productData.description,
        price: this.productData.price,
        active: this.productData.active,
      });
    }, 300);

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

  getProduct() {
    const id = String(this.activateRoute.snapshot.paramMap.get("id"));
    this.service.getProductById(id).subscribe((data: any) => {
      this.productData = data;
    })
  }


  submit() {
    this.busy = true;
    if (this.Form.invalid) {
      this.busy = false;
      return;
    }
    const id = String(this.activateRoute.snapshot.paramMap.get("id"));
    this.service.putProduct(this.Form.value, id)
      .subscribe((data: any) => {
        this.added = true;
        this.message = data.message;
        setTimeout(() => {
          this.added = false;
        }, 1400);
        this.busy = false;
        this.router.navigate(['/products/manager']);
      });
  }
}
