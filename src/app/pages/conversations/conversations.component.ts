import { CommentService } from './../../shared/services/comment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss']
})
export class ConversationsComponent implements OnInit {

  commentsForGroup: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getComment('Commun').subscribe((data: Comment[]) => {
      this.commentsForGroup = data;
    });
  }

  getComments(data) {
    this.commentsForGroup = data;
  }
}
