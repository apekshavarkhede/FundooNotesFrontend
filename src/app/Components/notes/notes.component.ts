import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { UserService } from '../../Services/user.service';
import { MatSnackBar } from '@angular/material';
import { NoteService } from '../../Services/note.service'



@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  // parentmsg = [];
  totalNotes = [];
  searchNote: string
  x = ''

  constructor(private userService: UserService, private snackBar: MatSnackBar, private dataService: DataService
    , private noteService: NoteService) { }

  getallNotes(value) {

    this.noteService.getAlNotes().subscribe(
      (response: any) => {
        this.totalNotes = response.data
        this.totalNotes.reverse()
        // console.log("value===", value);
        // let matchedNotes = []
        if (value) {
          let note = this.totalNotes.filter((element) => {
            return element.title === value
          })
          this.totalNotes = note;
        }
        else {
          let notes = this.totalNotes.filter((element) => {
            console.log("element.isArchive !== true", element, element.isArchive !== true);
            return element.isArchive === false
          })
          console.log("notes", notes);
          this.totalNotes = notes;
        }
      },
      err => {
        this.snackBar.open("err", "end now")
      }
    )
  }

  ngOnInit() {
    this.dataService.searchNote.subscribe(response => {
      this.x = response;
      console.log("response in ngOnit", this.x);

      this.getallNotes(this.x)
    })
    // let xx = this.dataService.searchNote.subscribe(
    //   m => this.x = m
    // )
    console.log("xxx===", this.x);
  }


}
