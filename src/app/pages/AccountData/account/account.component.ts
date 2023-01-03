import { AfterContentInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  userIsAdmin = false;
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.userVerify();
  }

  userVerify() {
    if (this.authService.user?.role.includes("admin")) {
      this.userIsAdmin = true;
    }
  }
}