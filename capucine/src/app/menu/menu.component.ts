import { Component, OnInit } from '@angular/core';
import {menuInfos} from '../../assets/data/home.data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu = menuInfos;

  constructor() { }

  ngOnInit() {
  }

}
