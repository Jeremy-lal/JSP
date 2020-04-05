import { UserService } from './../../shared/services/user.service';
import { CommentFormComponent } from './../comment-form/comment-form.component';
import { CommentService } from './../../shared/services/comment.service';
import { Comment } from './../../shared/models/comment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message: Comment;
  @Input() mode: string;
  @Output() showResponse = new EventEmitter<boolean>();
  @Output() giveMessage = new EventEmitter<Comment>();
  @Output() dataToDisplay = new EventEmitter<Comment[]>();
  @Output() dataResponse = new EventEmitter<Comment[]>();
  nbReponse: number;
  comments: Comment[];
  currentUser: User;
  actionAcces = ['admin', 'superAdmin'];

  constructor(public dialog: MatDialog, public commentService: CommentService, private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
    this.commentService.getNumberResponse(this.message).subscribe((data) => {
      this.nbReponse = data.count;
    });
  }

  displayResponse() {
    this.commentService.commentIdForResponse = this.message.id;
    this.showResponse.emit(true);
    this.giveMessage.emit(this.message);
  }

  updateComment(comment: Comment) {
    this.commentService.toUpdate = true;
    const dialogRef = this.dialog.open(CommentFormComponent, {
      width: '70%',
      data: comment
    });
    dialogRef.afterClosed().subscribe(result => {
      this.reload();
    });
  }

  deleteComment(comment: Comment) {
    this.commentService.deleteComment(comment.id).subscribe(() => {
      this.reload();
    });
  }

  reload() {
    if (this.mode === 'basic') {
      this.reloadComment();
      } else {
        this.reloadResponse();
      }
  }

  reloadComment() {
    this.commentService.getComment(this.commentService.locate).subscribe((data) => {
      this.dataToDisplay.emit(data);
    });
  }

  reloadResponse() {
    this.commentService.getResponseCommentById().subscribe((datas) => {
      this.dataResponse.emit(datas);
    });
  }

}
