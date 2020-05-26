import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
import { element } from 'protractor';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  constructor(private noteService: NoteService) { }

  totalArchiveNotes: Array<any>

  ngOnInit() {
    this.getArchivedNotes()
  }

  getArchivedNotes() {
    this.noteService.getAlNotes().subscribe(response => {
      console.log("response", response.data);
      let archiveNotes = response.data.filter((element: any) => {
        return element.isArchive === true
      })
      this.totalArchiveNotes = archiveNotes
    })
  }

}
