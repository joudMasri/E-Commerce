import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  services:any = [];
  categories:any =[];
  portfolio:Product[]=[];
  teamMembers:any =[];

  

  constructor(private apiCaller : HttpClient){

    this.apiCaller.get('http://localhost:3000/data')
    .subscribe((json:any =[])=>{

      for (let i = 1; i < json.length; i++) {
        let f = {
          title: json[i].title,
          description :json[i].description
        }
        this.services.push(f); 
      }

      for (let i = 0; i <3; i++) {
        let c= {
            title : json[i].titleC,
            description : json[i].descriptionC,
            imgC: json[i].imgC
        }
        this.categories.push(c)
      }

      for (let i = 0; i <3; i++) {
        let p= {
            menUrl  : json[i].urlMan,
            womenUrl : json[i].urlWomen,
            childrenUrl :json[i].urlChildren,
            id: i,
            name: 'Name' + i ,
            price : i*10 +10,
            description : 'description' +i,
        }
        this.portfolio.push(p)
      }

      for (let i = 0; i < 4; i++) {
        let member = {
          imgMember: json[i].imgMember,
        }
        this.teamMembers.push(member); 
      }


    })
  }

  getProducts(): Product[]{
    return this.portfolio
  }
}
