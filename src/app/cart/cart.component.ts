import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems=[
  { cImgUrl  : "../../assets/img/portfolio/men-2.jpg", id: 1, name: 'Name 1' , price : 10, description : 'description'},
  {cImgUrl : "../../assets/img/portfolio/women-1.jpg", id: 1, name: 'Name 1' , price : 20, description : 'description'},
  { cImgUrl  : "../../assets/img/portfolio/children-1.jpg",id: 1, name: 'Name 1' , price : 35, description : 'description',}];


  constructor(private apiCaller : HttpClient, private productService:ProductService) {


   }

  ngOnInit(): void {
   
  }

}
