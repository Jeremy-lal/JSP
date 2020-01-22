import { Comment } from './../../shared/models/comment';
import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/shared/services/comment.service';

@Component({
  selector: 'app-jsp4-page',
  templateUrl: './jsp4-page.component.html',
  styleUrls: ['./jsp4-page.component.scss']
})
export class Jsp4PageComponent implements OnInit {

  grp = 'Jsp4';
  jsp4Comments: Comment[];
  jsp4ResponseComments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getComment(this.grp).subscribe(((data: Comment[]) => this.jsp4Comments = data));
    this.commentService.getResponseComment(this.grp).subscribe(((data: Comment[]) => this.jsp4ResponseComments = data));

  }
}
