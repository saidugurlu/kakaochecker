import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images = [
  { path: '\assets\images\fernando-andrade-P65K7b1JK0M-unsplash.jpg', quality: 'High' },
  { path: '\assets\images\hector-emilio-gonzalez-InufphpCMm0-unsplash.jpg', quality: 'Medium' },
{ path: '\assets\images\joshua-rawson-harris-8aV0P1Ujz4w-unsplash.jpg', quality: 'Low' },
{ path: '\assets\images\kyle-glenn-6WpGfT2l5Xs-unsplash.jpg', quality: 'High' },
{ path: '\assets\images\lucas-vasques-8v5f5mF0IMO-unsplash.jpg', quality: 'Medium' },
{ path: '\assets\images\michael-dziedzic-4K2lIP0zc_k-unsplash.jpg', quality: 'Low' },
// it will be more images and be automatically added

   
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

