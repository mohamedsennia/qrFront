import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { CostumeImage } from "../Models/Image.model";
import { environment } from '../../environments/environment';
@Injectable({providedIn:"root"})
export class ConnectionService{
 link=environment.apiUrl;
constructor(private httpClient:HttpClient){
    
}
uploadFile(formData:FormData):Observable<CostumeImage>{

return this.httpClient.post<CostumeImage>(this.link+"/upload",formData).pipe(map(param=>{
    
    return new CostumeImage(param['url']);
}));
}
}