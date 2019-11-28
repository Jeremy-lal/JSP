import { Comment } from './../../shared/models/comment';
import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/shared/services/comment.service';

@Component({
  selector: 'app-jsp2-page',
  templateUrl: './jsp2-page.component.html',
  styleUrls: ['./jsp2-page.component.scss']
})
export class Jsp2PageComponent implements OnInit {

  jsp2Comment: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.jsp2Comment =  this.commentService.getCommunComment();
  }
}
