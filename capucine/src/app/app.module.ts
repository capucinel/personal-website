import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TypingAnimationDirective } from 'angular-typing-animation';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    TypingAnimationDirective
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
