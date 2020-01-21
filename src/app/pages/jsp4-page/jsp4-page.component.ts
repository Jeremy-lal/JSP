import { Comment } from './../../shared/models/comment';
import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/shared/services/comment.service';

@Component({
  selector: 'app-jsp4-page',
  templateUrl: './jsp4-page.component.html',
  styleUrls: ['./jsp4-page.component.scss']
})
export class Jsp4PageComponent implements OnInit {

  jsp4Comments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getJsp4Comment().subscribe(((data: Comment[]) => this.jsp4Comments = data));
  }
}
