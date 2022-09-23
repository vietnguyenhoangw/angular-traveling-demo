import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pagesLink } from 'src/app/app-routing.module';
import { AuthService } from 'src/app/service/auth.service';
import { Images } from 'src/assets/images';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  imageSide = Images.LoginImgSide

  username = "";
  password = "";

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.authService.getAll().subscribe((res:any)=>{
      console.log('====================================');
      console.log(res);
      console.log('====================================');
    })
  }

  onPressSignIn(): void {
    this.router.navigateByUrl(pagesLink.homePage);
  }

  inputUsername(event: any) {
    this.username = event.target.value
  }

  inputPassword(event: any) {
    this.password = event.target.value
  }

}
