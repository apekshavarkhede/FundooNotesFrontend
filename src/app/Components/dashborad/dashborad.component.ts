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
  grid: boolean = false;
  inputValue: string;
  searchNote: any;



  ngOnInit() {
    // this.dataService.searchNote.subscribe(response => this.searchNote = response) 
    this.dataService.title.subscribe(resonse => this.title = resonse)
    // this.searchKey()
    // this.dataService.open.subscribe(value => this.open = value)
  }

  signOut() {
    sessionStorage.clear()
    this.router.navigate(["/login"]);
  }

  searchKey() {
    this.dataService.searchInput(this.inputValue)

    // this.dataService.searchNote.subscribe(input => this.inputValue = this.inputValue)
  }

}
