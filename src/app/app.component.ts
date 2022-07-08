import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  services:any = [];
  categories:any =[];
  portfolio:any =[];
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
        }
        this.categories.push(c)
      }

      for (let i = 0; i <3; i++) {
        let p= {
            urlMan : json[i].urlMan,
            urlWomen : json[i].urlWomen,
            urlChildren :json[i].urlChildren
        }
        this.portfolio.push(p)
      }

    })
  }
}
