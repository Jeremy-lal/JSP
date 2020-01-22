import { Comment } from './../../shared/models/comment';
import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/shared/services/comment.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {

  grp = 'question';
  questionComments: Comment[];
  questionResponseComments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getComment(this.grp).subscribe(((data: Comment[]) => this.questionComments = data));
    this.commentService.getResponseComment(this.grp).subscribe(((data: Comment[]) => this.questionResponseComments = data));
  }

  showResponse(comment: Comment) {
    comment.show = !comment.show;
  }
}
