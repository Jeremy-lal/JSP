import { SidemenuComponent } from './../sidemenu/sidemenu.component';
import { CommentFormComponent } from './../comment-form/comment-form.component';
import { CommentService } from './../../shared/services/comment.service';
import { Comment } from './../../shared/models/comment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message: Comment;
  @Output() showResponse = new EventEmitter<boolean>();
  @Output() giveMessage = new EventEmitter<Comment>();
  @Output() dataToDisplay = new EventEmitter<Comment[]>();
  nbReponse: number;
  comments: Comment[];

  constructor(public dialog: MatDialog, public commentService: CommentService) { }

  ngOnInit() {
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
      this.reloadComment();
    });
  }

  deleteComment(comment: Comment) {
    this.commentService.deleteComment(comment.id).subscribe(() => {
      this.reloadComment();
    });
  }

  reloadComment() {
    this.commentService.getComment(this.commentService.locate).subscribe((data) => {
      this.comments = data;
      this.dataToDisplay.emit(this.comments);
    });
  }

}
