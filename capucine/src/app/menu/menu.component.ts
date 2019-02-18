import { Component, OnInit } from '@angular/core';
import { menuInfos } from '../../assets/data/home.data';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu = menuInfos;
  isHome = true;

  notHome(elemMenu) {
    if (elemMenu !== 'home') {
      this.isHome = false;
    }
    // return console.log('element traité par la fonction : ' + this.isHome);
  }
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) { }


  ngOnInit() {
    console.log(this.router.url);

  }
}
