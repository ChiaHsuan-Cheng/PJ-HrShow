import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PJ-HrShow';


  constructor(public DataSvc: DataService) {

  }
  ngOnInit(): void {
    this.DataSvc.allHrdata(); // 呼叫在 service 建立的方法show
  }







}

