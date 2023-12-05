import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GalleryComponent } from './gallery/gallery.component';
import { AppComponent } from    './app.component';; 

@NgModule({
  declarations: [   GalleryComponent, AppComponent  
  ],
  imports: [
    BrowserModule,

  ],
  providers: [

  ],
  bootstrap: [  GalleryComponent

  ]
})
export class AppModule { }
