import { Component, ViewChild } from '@angular/core';
import { ConnectionService } from '../../Services/Connection.service';
import { ImageService } from '../../Services/image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  @ViewChild('fileInput') fileInput: any;
  constructor(private connectionService:ConnectionService,private imageService:ImageService,private router:Router){

  }
  onFileSelected(event){

      let file:File=event.target.files[0];
 
    
    const formData = new FormData();
    formData.append('multipartFile', file);
    
    console.log("a")
    this.connectionService.uploadFile(formData).subscribe(param=>{
      this.imageService.imageLink=param.getUrl();
      this.router.navigate(["/QR"])
     
    })
   
    }
    openFileSelect(){
      this.fileInput.nativeElement.click();
    }
}
