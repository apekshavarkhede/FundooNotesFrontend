import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { NoteService } from '../../Services/note.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-labels-menu',
  templateUrl: './labels-menu.component.html',
  styleUrls: ['./labels-menu.component.scss']
})
export class LabelsMenuComponent implements OnInit {

  lableInput: string = '';
  list: boolean = true;

  @Output() changeLabels: EventEmitter<any> = new EventEmitter();
  value: '';

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  searchLable(event: any) {
    console.log("lable input", event.target.value);
    // let condition = 
  }

  addLable() {
    console.log("input va", this.lableInput);
    // this.changeLabels.emit(this.lableInput.length)
  }

  createLable() {
    console.log("lableInput", this.lableInput);
    let request = {
      label: this.lableInput
    }

    this.noteService.createLabel(request).subscribe(response => {
      console.log(" response inlabel", response.data.label);
      this.changeLabels.emit({ value: true, label: response.data.label })
      this.lableInput = '';
    },
      (error => {
        console.log("Err", error);
      }))

  }


}
