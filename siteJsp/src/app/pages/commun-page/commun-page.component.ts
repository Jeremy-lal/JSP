import { UserService } from './../../shared/services/user.service';
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

  constructor(private commentService: CommentService, private userService: UserService) { }

  ngOnInit() {
    this.communComment =  this.commentService.getCommunComment();
    this.userService.getCurrentUser(2).subscribe(data => this.userService.currentUser = data[0]);
  }

}
