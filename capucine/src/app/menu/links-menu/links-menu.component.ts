import { Component, OnInit } from '@angular/core';
import { menuInfos } from '../../../assets/data/home.data';

@Component({
  selector: 'app-links-menu',
  templateUrl: './links-menu.component.html',
  styleUrls: ['./links-menu.component.scss']
})
export class LinksMenuComponent implements OnInit {
  menu = menuInfos;

  constructor() { }

  ngOnInit() {
  }

}
