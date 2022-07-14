export class Product {
    id:number = 0 ;
    name:string = '';
    description:string = '';
    price:number = 0;
    menUrl:any = '';
    womenUrl:any = '';
    childrenUrl:any =''

    constructor(id:number , name:string , description:string ='' , price:number =0 , menUrl:any ,womenUrl:any , childrenUrl:any){
        this.id =id
        this.description =description
        this.name = name
        this.menUrl= menUrl;
        this.price = price;
        this.womenUrl = womenUrl;
        this.childrenUrl = childrenUrl
        
    }
    
}
