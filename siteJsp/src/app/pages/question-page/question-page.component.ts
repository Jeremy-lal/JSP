import { Comment } from './../../shared/models/comment';
import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/shared/services/comment.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {

  questionComments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getQuestionComment().subscribe(((data: Comment[]) => this.questionComments = data));
  }
}
