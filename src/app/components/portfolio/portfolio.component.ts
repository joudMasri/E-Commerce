import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  @Input() urlMan ='';
  @Input() urlWomen:string ='';
  @Input() urlChildren:string ='';
  constructor() { }

  ngOnInit(): void {
  }

}
