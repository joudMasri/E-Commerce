import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  @Input() title:string="";
  @Input() description:string="";
  @Input() iconName:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
