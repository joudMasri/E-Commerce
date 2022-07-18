import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  subject = new Subject();
   
  constructor() { }

  sendItem(product:any){
    this.subject.next(product) //triggering an event
    // console.log(product)
  }

  getItem():Observable<any>{
    // console.log(1)
    // console.log(this.subject.observed)
    return this.subject.asObservable();
  
  }


}
