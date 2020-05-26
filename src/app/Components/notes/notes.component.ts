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

  constructor(private userService: UserService, private snackBar: MatSnackBar
    , private noteService: NoteService) { }

  getallNotes() {
    this.noteService.getAlNotes().subscribe(
      (response: any) => {
        this.totalNotes = response.data
        this.totalNotes.reverse()
        let notes = this.totalNotes.filter((element) => {
          return element.isArchive !== true
        })
        this.totalNotes = notes;
      },
      err => {
        this.snackBar.open("err", "end now")
      }
    )
  }

  ngOnInit() {
    this.getallNotes()
  }


}
