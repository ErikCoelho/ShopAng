import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { CustomValidator } from 'src/app/validators/custom.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public createForm!: FormGroup;
  public busy = false;
  constructor(
    private service: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      firstName: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])),
      lastName: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required,
        CustomValidator.EmailValidator
      ])),
      document: new FormControl('', Validators.compose([
        Validators.minLength(14),
        Validators.required,
        CustomValidator.isCpf()
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])),

    })
  }

  get firstName() {
    return this.createForm.get('firstName')!;
  }

  get lastName() {
    return this.createForm.get('lastName')!;
  }

  get email() {
    return this.createForm.get('email')!;
  }

  get document() {
    return this.createForm.get('document')!;
  }

  get password() {
    return this.createForm.get('password')!;
  }

  submit() {
    this.busy = true;
    if (this.createForm.invalid) {
      return;
    }
    this.service.createAccount(this.createForm.value)
      .subscribe((data: any) => {
        this.busy = false;
        this.router.navigate(['/login']);
      });
  }

}
