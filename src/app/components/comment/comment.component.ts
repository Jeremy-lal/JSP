import { CommentService } from '../../shared/services/comment.service';
import { UserService } from './../../shared/services/user.service';
import { CommentFormComponent } from './../comment-form/comment-form.component';
import { Comment } from './../../shared/models/comment';
import { User } from './../../shared/models/user';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment;

  currentUser: User;

  commentClick: number;

  constructor(private commentService: CommentService, private userService: UserService, public dialog: MatDialog ) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
  }

  updateComment(comment: Comment) {
    this.commentService.toUpdate = true;
    const dialogRef = this.dialog.open( CommentFormComponent, {
      width: '550px',
      data: comment
    });
  }

  deleteComment(event) {
      this.commentService.deleteComment(event).subscribe();
      console.log(event);
  }

  commentClickId( commentId: number) {
    this.commentClick = commentId;
  }

}
