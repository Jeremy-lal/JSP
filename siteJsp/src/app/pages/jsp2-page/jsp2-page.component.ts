import { Comment } from './../../shared/models/comment';
import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/shared/services/comment.service';

@Component({
  selector: 'app-jsp2-page',
  templateUrl: './jsp2-page.component.html',
  styleUrls: ['./jsp2-page.component.scss']
})
export class Jsp2PageComponent implements OnInit {

  jsp2Comments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getJsp2Comment().subscribe(((data: Comment[]) => this.jsp2Comments = data));
  }
}
