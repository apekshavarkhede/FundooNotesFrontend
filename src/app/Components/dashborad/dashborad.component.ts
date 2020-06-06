import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service'
import { Router } from '@angular/router';
import { NoteService } from '../../Services/note.service'
import { MatDialog } from '@angular/material';
import { LabelDialougeComponent } from '../label-dialouge/label-dialouge.component'

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.scss']
})
export class DashboradComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router, private noteService: NoteService, public dialog: MatDialog) { }
  open: boolean
  title;
  grid: boolean = false;
  inputValue: string;
  searchNote: any;
  labels: Array<any> = [];

  ngOnInit() {
    this.title = this.dataService.title.subscribe(response => this.title = response)
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
        if (!this.labels.includes(element.labelName)) {
          this.labels.push(element.labelName)
        }
      });
    })
  }

  searchKey() {
    this.dataService.searchInput(this.inputValue)
  }

  editLabels() {
    this.dialog.open(LabelDialougeComponent, {
      minHeight: '250px',
      width: '260px',
    })
  }

}
