import { Component, OnInit, Input,OnChanges, SimpleChanges,EventEmitter,Output} from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-task-listing',
  templateUrl: './task-listing.component.html',
  styleUrls: ['./task-listing.component.css']
})
export class TaskListingComponent implements OnInit {
listData:any;
@Input() dataList:any;	
@Input() status: number;	
@Output() dragDone=new EventEmitter();
  constructor(private data:DataService) { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    this.listData=this.data.allTask.filter(elm=>elm.status==this.status)
  }

  dragStart(event, ob) {
    this.data.currentDrop = ob;
  }

  drop(status) {
    let ind=this.data.allTask.indexOf(this.data.currentDrop)
    if(ind>-1)
    {
    this.data.allTask[ind].status=status
    this.dragDone.emit()
    }
 
    
  }



}
