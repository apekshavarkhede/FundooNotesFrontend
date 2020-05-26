import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { NoteService } from '../../Services/note.service';
import { Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CollabratorComponent } from '../collabrator/collabrator.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})

export class DisplayNotesComponent implements OnInit {
  @Input() note: any;
  @Input() childMessage: string;
  @Output() getNotes: EventEmitter<any> = new EventEmitter();

  removable: boolean = true;
  open: boolean = false;

  constructor(private dataService: DataService, private noteService: NoteService,
    private snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit() {
  }

  setColor(colour) {
    let noteData = {
      '_id': this.note['_id'],
      'color': colour
    }
    this.noteService.changeColor(noteData).subscribe(
      response => {
        this.getNotes.emit(colour)
      },
      error => {
        console.log("errr", error);
      }
    )
  }

  addRemainder(remainder) {
    let noteData = {
      '_id': this.note['_id'],
      'remainder': remainder
    }
    this.noteService.addRemainder(noteData).subscribe(
      response => {
        this.getNotes.emit(remainder)
      },
      error => {
        console.log("error", error);
      }
    )
  }

  removeRemainder() {
    let remainderData = {
      '_id': this.note['_id'],
      remainder: null
    }
    this.noteService.removeRemainder(remainderData).subscribe(
      response => {
        this.getNotes.emit()
      },
      err => {
        console.log("error", err);
      }
    )
  }

  deleteNote() {
    console.log("this.note", this.note);

    let noteData = {
      '_id': this.note['_id']
    }
    this.noteService.deleteNote(noteData).subscribe(
      response => {
        console.log(noteData._id, "788888", this.note);

        console.log("response", response);
        this.getNotes.emit()
      }, error => {
        console.log("error", error);

      }
    )
  }

  setArchive() {
    let request = {
      '_id': this.note['_id'],
      isArchive: true
    }
    this.noteService.archiveNote(request).subscribe(response => {
      console.log("response", response);
      this.getNotes.emit()
    }, (error) => {
      console.log("err", error);

    })
  }

  unArchive() {
    let request = {
      '_id': this.note['_id'],
      isArchive: false
    }
    this.noteService.unArchieveNote(request).subscribe(response => {
      console.log("res inn unarchieve");
      this.getNotes.emit()
    })
  }

  openDialougeBox(): void {
    const dialogRef = this.dialog.open(CollabratorComponent, {
      data: { note: this.note }
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

