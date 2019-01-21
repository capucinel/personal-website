import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TypingAnimationDirective } from 'angular-typing-animation';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    TypingAnimationDirective
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
