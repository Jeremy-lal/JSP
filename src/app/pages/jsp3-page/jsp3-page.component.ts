import { Comment } from './../../shared/models/comment';
import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/shared/services/comment.service';

@Component({
  selector: 'app-jsp3-page',
  templateUrl: './jsp3-page.component.html',
  styleUrls: ['./jsp3-page.component.scss']
})
export class Jsp3PageComponent implements OnInit {

  jsp3Comments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getJsp3Comment().subscribe(((data: Comment[]) => {
      this.jsp3Comments = data;
      console.log(this.jsp3Comments);
    }));
  }
}
