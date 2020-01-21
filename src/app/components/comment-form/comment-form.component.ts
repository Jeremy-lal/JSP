import { User } from 'src/app/shared/models/user';
import { UserService } from './../../shared/services/user.service';
import { CommentService } from './../../shared/services/comment.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  commentForm = this.fb.group({
    title: [''],
    content: [''],
    grp: [''],
    user_id: [this.userService.currentUser.id]
  });

  currentUser: User;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<CommentFormComponent>, private commentService: CommentService,
              private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
  }

  sendComment(): void {
    const commentToPost = this.commentForm.value;
    this.commentService.createComment(commentToPost).subscribe((eventPosted) => {
      console.log(eventPosted);
    });
    this.dialogRef.close();
  }
}
