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

  grp = 'Jsp1';
  jsp1Comments: Comment[];
  jsp1ResponseComments: Comment[];

  constructor(private commentService: CommentService, private userService: UserService) { }

  ngOnInit() {
    this.userService.isLogged();
    this.commentService.getComment(this.grp).subscribe(((data: Comment[]) => this.jsp1Comments = data));
    this.commentService.getResponseComment(this.grp).subscribe(((data: Comment[]) => this.jsp1ResponseComments = data));
  }

  showResponse(comment: Comment) {
    comment.show = !comment.show;
  }
}
