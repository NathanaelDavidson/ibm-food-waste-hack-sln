import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgxGalleryImage, NgxGalleryOptions, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnChanges {
  private reader: FileReader = new FileReader();
  galleryOptions: NgxGalleryOptions[] = [
    {
      width: '300px',
      height: '300px',
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide
    }
  ];
  galleryImages: NgxGalleryImage[] = [];
  @Input()
  images: File[] | string[];

  constructor() { }

  ngOnInit() {
    this.reader.onload = (event: ProgressEvent) => {
      const url = this.reader.result;
      this.galleryImages.push({
        small: url,
        medium: url,
        big: url
      });
    };
  }

  ngOnChanges() {
    this.processImages();
  }

  processImages() {
    this.images.forEach((image: File | string) => {
      if (image instanceof File) {
        this.reader.readAsDataURL(image);
      } else if (image)  {
        this.galleryImages.push({
          small: image,
          medium: image,
          big: image
        });
      }
    });
  }
}
