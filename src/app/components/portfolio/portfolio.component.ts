import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  @Input() urlMan ='';
  @Input() urlWomen:string ='';
  @Input() urlChildren:string ='';

  @Input()price  :number =0;
  @Input() name :string ='';


  constructor() { }

  ngOnInit(): void {
  }

}
