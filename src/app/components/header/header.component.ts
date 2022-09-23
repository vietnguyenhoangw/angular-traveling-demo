import { Component, OnInit, ViewChild } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // props
  iconMenu = faBars;

  // state
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

  onExpandMenu(): void {
    this.panelOpenState = !this.panelOpenState
  }

}
