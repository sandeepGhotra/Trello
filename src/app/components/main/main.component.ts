import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cardData:any;
  constructor(public data:DataService) { }

  ngOnInit() {
  }
  addTask(val)
  {
   
    this.data.allTask.push({
      task:"Enter your task",
      status:val,
      edit:true
    });
  this.changeData()
  }
  changeData()
  {
    this.cardData=[...this.data.allTask]
  }
}
