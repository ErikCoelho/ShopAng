import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { CustomValidator } from 'src/app/validators/custom.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public postForm!: FormGroup;
  public busy = false;
  public infoWrong = false;
  constructor(
    private router: Router,
    private service: DataService,
  ) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required,
        CustomValidator.EmailValidator
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ]))
    })
  }

  get email() {
    return this.postForm.get('email')!;
  }

  get password() {
    return this.postForm.get('password')!;
  }

  submit() {
    if (this.postForm.invalid) {
      return;
    }

    this.busy = true;
    this.service.login(this.postForm.value)
      .subscribe((data: any) => {
        this.login(data);

      });
  }

  login(data: any) {
    this.busy = false;
    if (data.success == false) {
      this.infoWrong = true;
      return
    }
    else {
      localStorage.setItem('shop.token', data.data);
      this.router.navigateByUrl("/");
    }
  }

}
