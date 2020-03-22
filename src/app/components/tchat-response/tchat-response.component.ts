import { Comment } from './../../shared/models/comment';
import { CommentService } from './../../shared/services/comment.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tchat-response',
  templateUrl: './tchat-response.component.html',
  styleUrls: ['./tchat-response.component.scss']
})
export class TchatResponseComponent implements OnInit {

  message: Comment;
  responses: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getCommentById(this.commentService.commentIdForResponse).subscribe((data) => {
      this.message = data;
      this.commentService.getResponseCommentById(this.message).subscribe((datas) => {
        this.responses = datas;
        console.log(this.responses);

      });
    });
  }

  close() {
    this.commentService.showResponseTchat = false;
  }

}
