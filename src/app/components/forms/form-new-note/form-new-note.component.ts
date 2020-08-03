import { Note } from '../../../shared/models/note';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NoteService } from '../../../shared/services/note.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-form-new-note',
  templateUrl: './form-new-note.component.html',
  styleUrls: ['./form-new-note.component.scss']
})
export class FormNewNoteComponent implements OnInit {

  note = new Note();

  noteForm = this.fb.group({
    title: [''],
    valeur: [''],
    user_id: []
  });

  constructor(private fb: FormBuilder, private noteService: NoteService, public dialogRef: MatDialogRef<FormNewNoteComponent>,
              @Inject(MAT_DIALOG_DATA) public userId: number) { }

  ngOnInit() {
  }

  sendNote(): void {
    const noteToPost: Note = this.noteForm.value;
    noteToPost.user_id = this.userId;
    this.noteService.addNote(noteToPost).subscribe((eventPosted) => {
      console.log(eventPosted);
    });
    this.dialogRef.close();
  }
}
