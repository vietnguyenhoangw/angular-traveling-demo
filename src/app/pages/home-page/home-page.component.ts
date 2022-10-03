import { Component, OnInit } from '@angular/core';
import {
  faCirclePlay,
  faTaxi,
  faGlobe,
  faWallet,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  iconBannerPlay = faCirclePlay;
  iconAwards = [faTaxi, faGlobe, faWallet, faPeopleGroup];

  constructor() {}

  ngOnInit(): void {}
}
