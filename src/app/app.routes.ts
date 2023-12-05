import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
];
