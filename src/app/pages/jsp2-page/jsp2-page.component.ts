import { Comment } from './../../shared/models/comment';
import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/shared/services/comment.service';

@Component({
  selector: 'app-jsp2-page',
  templateUrl: './jsp2-page.component.html',
  styleUrls: ['./jsp2-page.component.scss']
})
export class Jsp2PageComponent implements OnInit {

  grp = 'Jsp2';
  jsp2Comments: Comment[];
  jsp2ResponseComments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getComment(this.grp).subscribe(((data: Comment[]) => this.jsp2Comments = data));
    this.commentService.getResponseComment(this.grp).subscribe(((data: Comment[]) => this.jsp2ResponseComments = data));

  }
}
