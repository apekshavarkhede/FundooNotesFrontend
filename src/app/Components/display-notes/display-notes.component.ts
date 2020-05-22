import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { MatSnackBar } from '@angular/material';
import { NoteService } from '../../Services/note.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})

export class DisplayNotesComponent implements OnInit {
  @Input() childMessage: string;
  // @Input() noteInfo: string;


  constructor(private dataService: DataService, private noteService: NoteService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  changeColour(colour) {

    // let note = {
    //   '_id': this.noteInfo['_id'],
    //   'color': colour
    // }
    // console.log("noteInfoooo==", note);

    // this.noteService.changeColor(note).subscribe(
    //   response => {
    //     // this.color.emit(colour)

    //     console.log("res-==", response);
    //   },
    //   error => {
    //     console.log("errr", error);
    //   }
    // )
  }

}
