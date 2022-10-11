import { Component, OnInit, ViewChild } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // props
  iconMenu = faBars;


  // state
  isPanelOpenState = false;
  isLoginActive = false;
  logout = "logout";
  onShowMobileMenu = false

  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    console.log('====================================');
    console.log(this.authService.getCurrentUser());
    console.log('====================================');
  }

  onExpandMenu(): void {
    this.isPanelOpenState = !this.isPanelOpenState
  }

  onOpenMenu(): void {
    this.onShowMobileMenu = !this.onShowMobileMenu
  }
}
