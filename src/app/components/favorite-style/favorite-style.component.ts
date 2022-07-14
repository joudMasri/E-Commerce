import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-style',
  templateUrl: './favorite-style.component.html',
  styleUrls: ['./favorite-style.component.css']
})
export class FavoriteStyleComponent implements OnInit {
  @Input() fImgUrl =''

  @Input()price  :number =0;
  @Input() name :string ='';
  constructor() { }

  ngOnInit(): void {
  }

}
