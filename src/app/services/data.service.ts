import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public searchText=''
  public allTask:any=[
    {
      task:"adding of product",
      status:1
    },
    {
      task:"editing of product",
      status:2
    },
    {
      task:"listing of product",
      status:3
    },
    {
      task:"adding of notification",
      status:1
    },
    {
      task:"editing of notification",
      status:2
    },
    {
      task:"listing of notification",
      status:1
    }
  ]
  public currentDrop:any={}

  constructor() { }
}
