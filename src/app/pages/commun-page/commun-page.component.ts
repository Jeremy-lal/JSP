import { User } from '../../shared/models/user';
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

  grp = 'Commun';

  communComments: Comment[];
  communResponseComments: Comment[];
  currentUser: User;

  constructor(private commentService: CommentService, private userService: UserService) { }

  ngOnInit() {
    this.userService.isLogged();
    this.commentService.getComment(this.grp).subscribe(((data: Comment[]) => this.communComments = data));
    this.commentService.getResponseComment(this.grp).subscribe(((data: Comment[]) => {
      this.communResponseComments = data;
      console.log(this.communResponseComments);
    }));

    this.currentUser = this.userService.currentUser;
  }

  showResponse(comment: Comment) {
    comment.show = !comment.show;
  }


}
