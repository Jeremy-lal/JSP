import { Note } from './../../shared/models/note';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-new-note',
  templateUrl: './form-new-note.component.html',
  styleUrls: ['./form-new-note.component.scss']
})
export class FormNewNoteComponent implements OnInit {

  note = new Note();

  noteForm = this.fb.group({
    titlenote: [''],
    score: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  submit() {
    console.log(this.noteForm.value);
  }
}
