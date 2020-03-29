import { SidemenuComponent } from './../sidemenu/sidemenu.component';
import { CommentFormComponent } from './../comment-form/comment-form.component';
import { CommentService } from './../../shared/services/comment.service';
import { Comment } from './../../shared/models/comment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message: Comment;
  @Output() showResponse = new EventEmitter<boolean>();
  @Output() giveMessage = new EventEmitter<Comment>();
  nbReponse: number;

  constructor(public commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getNumberResponse(this.message).subscribe((data) => {
      this.nbReponse = data.count;
    });
  }

  reply(message: Comment) {
    if (message.response === true) {
      message.response = false;
    } else {
      message.response = true;
    }
    this.commentService.commentIdForResponse = message.id;
    this.commentService.openFormForResponse = true;
  }

  displayResponse() {
    this.commentService.commentIdForResponse = this.message.id;
    this.showResponse.emit(true);
    this.giveMessage.emit(this.message);
  }

  updateComment(comment: Comment)  {
  }

  deleteComment(comment: Comment) {
    this.commentService.deleteComment(comment.id).subscribe();
  }

}
