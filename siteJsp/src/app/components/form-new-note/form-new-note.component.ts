import { UserService } from './../../shared/services/user.service';
import { Note } from './../../shared/models/note';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/shared/services/note.service';
import { AddNoteComponent } from 'src/app/pages/add-note/add-note.component';

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

  constructor(private fb: FormBuilder, private noteService: NoteService,  public dialogRef: MatDialogRef<AddNoteComponent>) { }

  ngOnInit() {
  }

  sendNote(): void {
    this.noteService.addNote(this.noteForm.value).subscribe((eventPosted) => {
      console.log(eventPosted);

    });
    this.dialogRef.close();
  }
}
