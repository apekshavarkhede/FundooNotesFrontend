import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { NoteService } from '../../Services/note.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-remainders',
  templateUrl: './remainders.component.html',
  styleUrls: ['./remainders.component.scss']
})
export class RemaindersComponent implements OnInit {

  totalNotes: Array<any>;

  constructor(private noteService: NoteService) { }

  getNotes() {
    this.noteService.getAlNotes().subscribe(response => {
      let remaindersNotes = response.data.filter((element: any) => {
        return element.remainder !== null
      });
      this.totalNotes = remaindersNotes
    }, (error) => {
      console.log("error", error);
    }
    )
  }

  ngOnInit() {
    this.getNotes()
  }

}
