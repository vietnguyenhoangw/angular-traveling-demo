import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  faCirclePlay,
  faTaxi,
  faGlobe,
  faWallet,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  iconBannerPlay = faCirclePlay;
  iconAwards = [faTaxi, faGlobe, faWallet, faPeopleGroup];

  constructor(
    private modalRef: MatDialog
  ) {}

  ngOnInit(): void {}

  openModal() {
    this.modalRef.open(ModalComponent, {
      width: "100%",
      height: "50%"
    })
  }
}
