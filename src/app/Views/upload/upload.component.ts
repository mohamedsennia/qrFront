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
  private fileUploaded:boolean;
  public file:File;
  constructor(private connectionService:ConnectionService,private imageService:ImageService,private router:Router){
    this.fileUploaded=false;
    this.file=null;
  }
  onFileSelected(event){

      this.file=event.target.files[0];
      this.fileUploaded=true;
    }
    sendFile(){
      const formData = new FormData();
      formData.append('multipartFile', this.file);
    

      this.connectionService.uploadFile(formData).subscribe(param=>{
        this.imageService.imageLink=param.getUrl();
        this.router.navigate(["/QR"])
       
      })
    }
    openFileSelect(){
      this.fileInput.nativeElement.click();
    }
    removeFile(){
      this.file=null
    }
}
