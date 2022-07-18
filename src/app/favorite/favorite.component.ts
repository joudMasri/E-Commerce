import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { FavoriteItemsService } from '../services/favorite-items.service';
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
  constructor(private getItem:FavoriteItemsService) { }

  ngOnInit(): void {
    this.getItem.getItem().subscribe((product)=>{
      this.favoriteItems.push({
        name: product.name,
        price:product.price,
        id :1,
        description:'ddws',
        fImgUrl:"../../assets/img/portfolio/men-1.jpg",
      })
     
    })
    
  }

}
