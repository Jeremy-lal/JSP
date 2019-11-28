import { Comment } from './../../shared/models/comment';
import { CommentService } from './../../shared/services/comment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commun-page',
  templateUrl: './commun-page.component.html',
  styleUrls: ['./commun-page.component.scss']
})
export class CommunPageComponent implements OnInit {

  communComment: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.communComment =  this.commentService.getCommunComment();
  }

}
