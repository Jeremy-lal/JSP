import { Comment } from './../../shared/models/comment';
import { User } from 'src/app/shared/models/user';
import { UserService } from './../../shared/services/user.service';
import { CommentService } from './../../shared/services/comment.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
    user_id: [this.userService.currentUser.id],
  });

  currentUser: User;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<CommentFormComponent>, private commentService: CommentService,
              private userService: UserService, @Inject(MAT_DIALOG_DATA) public commentClick: Comment) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
  }

  sendComment(): void {
    const commentToPost: Comment = this.commentForm.value;
    if (this.commentClick !== undefined) {
      commentToPost.comment_id = this.commentClick.id;
      // commentToPost.grp = this.commentClick.grp;
    }
    this.commentService.createComment(commentToPost).subscribe();
    this.dialogRef.close();
  }
}
