import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksNetworksMenuComponent } from './links-networks-menu.component';

describe('LinksNetworksMenuComponent', () => {
  let component: LinksNetworksMenuComponent;
  let fixture: ComponentFixture<LinksNetworksMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksNetworksMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksNetworksMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
