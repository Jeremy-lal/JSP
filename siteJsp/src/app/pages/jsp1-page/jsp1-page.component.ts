import { UserService } from './../../shared/services/user.service';
import { Comment } from './../../shared/models/comment';
import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/shared/services/comment.service';

@Component({
  selector: 'app-jsp1-page',
  templateUrl: './jsp1-page.component.html',
  styleUrls: ['./jsp1-page.component.scss']
})
export class Jsp1PageComponent implements OnInit {

  jsp1Comments: Comment[];

  constructor(private commentService: CommentService, private userService: UserService) { }

  ngOnInit() {
    this.commentService.getJsp1Comment().subscribe(((data: Comment[]) => this.jsp1Comments = data));
  }
}
