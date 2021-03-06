import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteItemsService {

  subject = new Subject();
   
  constructor() { }

  sendItem(product:any){
    this.subject.next(product) //triggering an event
  }

  getItem():Observable<any>{
  
    return this.subject.asObservable();
  
  }

  
}
