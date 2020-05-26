import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.scss']
})
export class DashboradComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }
  open: boolean
  title = "fundooNotes";
  grid:boolean=false;


  ngOnInit() {
    this.dataService.open.subscribe(value => this.open = value)
  }

  signOut() {
    sessionStorage.clear()
    this.router.navigate(["/login"]);
  }



}
