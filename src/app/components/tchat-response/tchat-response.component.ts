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
  responses: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnChanges() {
    this.commentService.getResponseCommentById(this.message).subscribe((datas) => {
      this.responses = datas;
      console.log(this.responses);
    });
  }
  ngOnInit() {}

  close() {
    this.displayResponse.emit(false);
  }

}
