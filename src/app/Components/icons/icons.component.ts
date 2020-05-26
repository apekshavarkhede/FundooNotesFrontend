import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { NoteService } from '../../Services/note.service'
import { MatSnackBar } from '@angular/material';
// import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() archivedNote: string;
  @Output() colorEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() remainderEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() collabrator: EventEmitter<any> = new EventEmitter<any>()
  @Output() delete: EventEmitter<any> = new EventEmitter<any>()
  @Output() archive: EventEmitter<any> = new EventEmitter<any>()
  @Output() unArchive: EventEmitter<any> = new EventEmitter<any>()

  constructor(private snackBar: MatSnackBar, private noteService: NoteService) { }
  public colorCode: any = [
    [
      { name: "white", hexcode: "#FFFFFF" },
      { name: "red", hexcode: "#FF0000" },
      { name: "orange", hexcode: "#ffa500" },
      { name: "yellow", hexcode: "#FFFF33" },
    ],
    [
      { name: "lime", hexcode: " #00FF00" },
      { name: "teal", hexcode: "#008080" },
      { name: "blue", hexcode: "#0000FF" },
      { name: "Dark Blue", hexcode: "#00008b" },
    ],
    [
      { name: "purple", hexcode: "#800080" },
      { name: "pink", hexcode: "#654321" },
      { name: "brown", hexcode: "#654321" },
      { name: "grey", hexcode: "#808080" },
    ]
  ]

  setColor(colour) {
    this.colorEvent.emit(colour)
  }

  addRemainder(date) {
    this.remainderEvent.emit(date)
  }

  openCollabrator() {
    this.collabrator.emit()
  }

  deleteNote() {
    this.delete.emit()
  }

  archiveNote() {
    this.archive.emit()
  }

  unArchiveNote() {
    this.unArchive.emit()
  }

  ngOnInit() {
  }

}
