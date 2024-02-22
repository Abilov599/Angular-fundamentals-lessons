import { Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { AppComponent } from './app.component';
import { GreetingsComponent } from './greetings.component';

export const routes: Routes = [
  {
    path: '',
    component: GreetingsComponent,
  },
  {
    // add a default path to greetings component
    path: 'about',
    component: AboutPageComponent,
  },
];
