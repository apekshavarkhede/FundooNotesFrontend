import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service'
import { Router } from '@angular/router';
import { NoteService } from '../../Services/note.service'

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.scss']
})
export class DashboradComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router, private noteService: NoteService) { }
  open: boolean
  title = "fundooNotes";
  grid: boolean = false;
  inputValue: string;
  searchNote: any;
  labels: Array<any> = [];

  ngOnInit() {
    this.dataService.lable.subscribe(res => {
      this.getAllLabels()
    })
  }

  signOut() {
    sessionStorage.clear()
    this.router.navigate(["/login"]);
  }

  getAllLabels() {
    this.noteService.getLabels().subscribe(response => {
      response.data.forEach(element => {
        if (!this.labels.includes(element.label)) {
          this.labels.push(element.label)
        }
      });
    })
  }

  searchKey() {
    this.dataService.searchInput(this.inputValue)
  }

}
