import { Comment } from './../../shared/models/comment';
import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/shared/services/comment.service';

@Component({
  selector: 'app-jsp3-page',
  templateUrl: './jsp3-page.component.html',
  styleUrls: ['./jsp3-page.component.scss']
})
export class Jsp3PageComponent implements OnInit {

  grp = 'Jsp3';
  jsp3Comments: Comment[];
  jsp3ResponseComments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getComment(this.grp).subscribe(((data: Comment[]) => this.jsp3Comments = data));
    this.commentService.getResponseComment(this.grp).subscribe(((data: Comment[]) => this.jsp3ResponseComments = data));
  }

  showResponse(comment: Comment) {
    comment.show = !comment.show;
  }

}
