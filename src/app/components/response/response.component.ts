import { CommentService } from './../../shared/services/comment.service';
import { Comment } from './../../shared/models/comment';
import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { MatDialog } from '@angular/material';
import { CommentFormComponent } from '../comment-form/comment-form.component';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {

  @Input() response;

  currentUser: User;

  constructor(private userService: UserService, private commentService: CommentService, public dialog: MatDialog) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
  }

  deleteResponse(event) {
    this.commentService.deleteComment(event).subscribe();
    console.log(event);
  }

  updateComment(comment) {
    this.commentService.toUpdate = true;
    const dialogRef = this.dialog.open(CommentFormComponent, {
      width: '550px',
      data: comment
    });
  }

}
