import { Component, OnInit } from '@angular/core';
import { MenuService } from './providers/menu.service';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('myAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [style({ opacity: 0 })],
          { optional: true }
        ),
        query(
          ':leave',
          [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
          { optional: true }
        )
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  iconMenu: string;
  isMobile: boolean;
  visible = false;
  stateOpen = true;
  isDesktop: boolean;


  // to determine if in desktop or mobile view
  watcher: Subscription;
  activeMediaQuery: string;
  constructor(
    private menuService: MenuService,
    private media: ObservableMedia
  ) {
    this.watcher = this.media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? change.mqAlias : '';
      this.isMobile = this.activeMediaQuery === 'xs' || this.activeMediaQuery === 'sm';
      this.isMobile ? menuService.change.subscribe(isOpen => {
        this.visible = isOpen;
        this.iconMenu = this.menuService.isOpen ? 'close' : 'menu';
      }) : this.menuService.close();
    });
  }

  ngOnInit() {
    this.iconMenu = 'menu';
  }


  toggle() {
    this.menuService.toggle();
  }
}
