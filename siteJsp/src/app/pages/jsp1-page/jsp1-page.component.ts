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

  jsp1Comment: Comment[];

  constructor(private commentService: CommentService, private userService: UserService) { }

  ngOnInit() {
    this.jsp1Comment =  this.commentService.getCommunComment();
    console.log(this.userService.currentUser);
    console.log(this.userService.currentUser.id);
  }
}
