import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
 @Input() title:string ='';
 @Input() description :string ='';
 @Input() imgC:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
