import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  open: boolean;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.open.subscribe(value => this.open = value)
  }
  
  openDrawer() {
    console.log("hiii");

    this.dataService.changeInValue(!this.open)
  }




}
