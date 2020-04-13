import { Comment } from './../../shared/models/comment';
import { CommentService } from './../../shared/services/comment.service';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tchat-response',
  templateUrl: './tchat-response.component.html',
  styleUrls: ['./tchat-response.component.scss']
})
export class TchatResponseComponent implements OnInit, OnChanges {

  @Input() message: Comment;
  @Output() displayResponse = new EventEmitter<boolean>();
  @Output() dataToDisplay = new EventEmitter<Comment[]>();
  responses: Comment[];
  comments: Comment[];
  mode = 'responses';

  constructor(private commentService: CommentService) { }

  ngOnChanges() {
    if (this.message) {
      this.commentService.getResponseCommentById().subscribe((datas) => {
        this.responses = datas;
      });
    }
  }
  ngOnInit() {}

  close() {
    this.displayResponse.emit(false);
  }

  getResponse(event) {
    this.responses = event;
    this.getComments();
  }

  getComments() {
    this.commentService.getComment(this.commentService.locate).subscribe((data) => {
      this.comments = data;
      this.dataToDisplay.emit(this.comments);
    });
  }

}
