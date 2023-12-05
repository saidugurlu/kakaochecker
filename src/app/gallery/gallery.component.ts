import { Component, OnInit } from '@angular/core';
import beanData from '../data/bean_data.json';

interface Bean {
  id: number;
  path: string;
  quality: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  beans: Bean[] = beanData;

  constructor() {}

  ngOnInit(): void {}
}
