import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderMenuComponent } from './menu/header-menu/header-menu.component';
import { LinksMenuComponent } from './menu/links-menu/links-menu.component';
import { LinksNetworksMenuComponent } from './menu/links-networks-menu/links-networks-menu.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    HeaderMenuComponent,
    LinksMenuComponent,
    LinksNetworksMenuComponent,
    AboutComponent,
    ResumeComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
