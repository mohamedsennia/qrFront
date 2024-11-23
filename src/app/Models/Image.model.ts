export class CostumeImage{
constructor(private url:string){

}
getUrl(){
    return this.url;
}
setUrl(url:string){
    this.url=url;
}
}