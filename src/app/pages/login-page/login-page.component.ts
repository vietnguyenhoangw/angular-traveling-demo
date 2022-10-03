import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pagesLink } from 'src/app/app-routing.module';
import { AuthService } from 'src/app/service/auth.service';
import { Images } from 'src/assets/images';
import { ToastrService } from 'ngx-toastr';
import { isEmpty } from 'lodash';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  imageSide = Images.LoginImgSide;

  username = '';
  password = '';
  loading = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.authService.logoutService();
  }

  validation(): boolean {
    if (isEmpty(this.username)) {
      return false;
    }
    if (isEmpty(this.password)) {
      return false;
    }
    return true;
  }

  onPressSignIn(): void {
    if (!this.validation()) {
      this.toastr.error('Enter the login info');
      return;
    }

    this.loading = true;
    this.authService
      .loginService({ username: this.username, password: this.password })
      .subscribe((res: any) => {
        if (res?.message === 'success') {
          const delay = setTimeout(() => {
            // save token to localStorage
            const Token = res?.data?.Token;
            this.authService.saveToken(Token);

            // save user info to localStorage
            const userInfo = res?.data;
            this.authService.saveUserInfo(userInfo);

            this.toastr.success('Login Success');
            this.router.navigateByUrl(pagesLink.homePage);
            this.loading = false;
          }, 3000);
        } else {
          this.toastr.error('Login Failure');
          this.loading = false;
        }
      })
  }

  inputUsername(event: any) {
    this.username = event.target.value;
  }

  inputPassword(event: any) {
    this.password = event.target.value;
  }
}
