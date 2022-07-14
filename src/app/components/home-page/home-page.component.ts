import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements  OnInit {

  services:any = [];
  categories:any =[];
  portfolio:Product[]=[];
  teamMembers:any =[];

  ngOnInit(){
    this.portfolio = this.productService.getProducts();
    console.log(this.productService.getProducts())
  }

  constructor(private apiCaller : HttpClient, private productService:ProductService){

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
      for (let i = 0; i < 4; i++) {
        let member = {
          imgMember: json[i].imgMember,
        }
        this.teamMembers.push(member); 
      }


    })
  }
}
