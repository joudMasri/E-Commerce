import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  @Input() productItem :any;
  data :any;
  constructor(private sendProduct :CartService,private route: ActivatedRoute,private router :Router) { }

  ngOnInit(): void {
  } 

  // handleAddToCart(){
  //   this.sendProduct.sendItem(this.productItem)
  // }

  handleAddToCart(){
    let data :any =this.productItem ;
    this.router.navigate(['/navbar/cart'],{
      queryParams:{data:JSON.stringify(data)}
    })
  }
}
