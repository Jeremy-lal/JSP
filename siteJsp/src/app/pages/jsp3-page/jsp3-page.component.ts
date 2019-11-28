import { Comment } from './../../shared/models/comment';
import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/shared/services/comment.service';

@Component({
  selector: 'app-jsp3-page',
  templateUrl: './jsp3-page.component.html',
  styleUrls: ['./jsp3-page.component.scss']
})
export class Jsp3PageComponent implements OnInit {

  jsp3Comment: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.jsp3Comment =  this.commentService.getCommunComment();
  }
}
