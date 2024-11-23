import { Component } from '@angular/core';
import { ImageService } from '../../Services/image.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.css'
})
export class QRComponent {
  imageLink:string
constructor(private imageService:ImageService){
this.imageLink=imageService.imageLink;
}
}
