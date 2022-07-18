import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  data :any;
  cartItems=[
  { id: 1,productId:1, name: 'Name 1' , price : 10, description : 'description',qty:4 , cImgUrl  : "../../assets/img/portfolio/men-1.jpg"},
];


  cartTotal =0;

  constructor(private getItem :CartService ,private router:Router, private route: ActivatedRoute) {
   }

  ngOnInit(){

    this.route.queryParams.subscribe((product)=>{
        console.log(product);
        this.data =JSON.parse(product['data']);
        this.cartItems.push({
                name: this.data.name,
                price: this.data.price,
                id :1,
                description:'ddws',
                qty:1,
                cImgUrl:"../../assets/img/portfolio/men-1.jpg",
                productId:1
          })
    this.cartItems.forEach(item =>{
      this.cartTotal +=( item.qty *item.price)
     })
  })
}
}

 