import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { NoteService } from '../../Services/note.service'
import { MatSnackBar } from '@angular/material';
import { HttpHeaders } from '@angular/common/http';
import { Output, EventEmitter } from '@angular/core';
import { DataService } from '../../Services/data.service'
import { log } from 'util';
import { IconsComponent } from '../icons/icons.component'


@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
  formData: FormGroup
  isPopUp = false;
  @Output() getNotes: EventEmitter<any> = new EventEmitter();

  noteArchive = {
    title: null,
    label: [],
    isArchived: false,
    isTrash: false
  }

  constructor(private formBuilder: FormBuilder, private router: ActivatedRoute, private noteService: NoteService,
    private dataService: DataService, private snackBar: MatSnackBar) { }

  formValidation() {
    this.formData = this.formBuilder.group({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      discription: new FormControl('', [Validators.required])
    })
  }

  openMatCard() {
    this.isPopUp = !this.isPopUp;
  }

  createNote() {
    if (this.formData.status === "VALID") {
      let noteData = {
        title: this.formData.value.title,
        discription: this.formData.value.discription
      }
      this.noteService.createNote(noteData).subscribe(
        (response: any) => {

          this.getNotes.emit()
        },
        err => {
          this.snackBar.open("err", "end now")
        }
      )
    }
    if (this.formData.status === "INVALID") {
      this.snackBar.open("give correct data", "end now")
    }
  }

  ngOnInit() {
    this.formValidation();
  }

}
