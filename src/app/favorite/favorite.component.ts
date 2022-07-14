import { Component, OnInit } from '@angular/core';
// import { Products } from '../products';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  favoriteItems=[
    { fImgUrl  : "../../assets/img/portfolio/men-2.jpg", id: 1, name: 'Name 1' , price : 10, description : 'description'},
    {fImgUrl : "../../assets/img/portfolio/women-1.jpg", id: 1, name: 'Name 1' , price : 10, description : 'description'},
    { fImgUrl  : "../../assets/img/portfolio/children-1.jpg",id: 1, name: 'Name 1' , price : 10, description : 'description',}];
  // FavoriteProducts:Array<Products>=[]
  constructor() { }

  ngOnInit(): void {
  }

}
