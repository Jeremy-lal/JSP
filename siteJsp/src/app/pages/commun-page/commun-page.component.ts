import { User } from 'src/app/shared/models/user';
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

  communComments: Comment[];
  currentUser: User;

  constructor(private commentService: CommentService, private userService: UserService) { }

  ngOnInit() {
    this.commentService.getCommunComment().subscribe(((data: Comment[]) => this.communComments = data));

    this.currentUser = this.userService.currentUser;
  }

}
