import { User } from './../../shared/models/user';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from 'src/app/shared/services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment;
  currentUser: User;

  constructor(private commentService: CommentService, private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
  }
  deleteComment(event) {
      this.commentService.deleteComment(event).subscribe();
      console.log(event);
  }
}
