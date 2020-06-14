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

  getallNotes() {

    this.noteService.getAlNotes().subscribe(
      (response: any) => {
        this.totalNotes = response.data
        let notes = this.totalNotes.filter((element) => {
          return element.isArchive === false
        })
        this.totalNotes = notes;
        this.totalNotes.reverse()
      },
      err => {
        this.snackBar.open("err", "end now")
      }
    )
  }


  searchNoteByTitle(data) {
    let noteData = {
      search: data
    }
    this.noteService.searchNote(noteData).subscribe(response => {
      // this.totalNotes = response.data
      let notes = this.totalNotes.filter((element) => {
        return element.isArchive === false
      })
      this.totalNotes = notes;
      this.totalNotes.reverse()
    })
  }

  ngOnInit() {
    this.dataService.changeInTitle("FundooNotes")
    this.dataService.searchNote.subscribe(response => {
      this.x = response;
      if (response.length > 0) {
        this.searchNoteByTitle(response)
      }
      if (response.length === 0) {
        this.getallNotes()
      }
    })
  }


}
