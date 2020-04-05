import { Comment } from './../../shared/models/comment';
import { User } from '../../shared/models/user';
import { UserService } from './../../shared/services/user.service';
import { CommentService } from './../../shared/services/comment.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-response-form',
  templateUrl: './response-form.component.html',
  styleUrls: ['./response-form.component.scss']
})
export class ResponseFormComponent implements OnInit {

  @Output() dataResponse = new EventEmitter<Comment[]>();
  responses: Comment[];

  responseForm = new FormGroup({
    content: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  currentUser: User;
  constructor(private fb: FormBuilder, public commentService: CommentService, private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
  }

  sendResponse(): void {
    const responseToPost: Comment = this.responseForm.value;
    responseToPost.user_id = this.userService.currentUser.id;
    responseToPost.grp = this.commentService.locate;
    responseToPost.comment_id = this.commentService.commentIdForResponse;
    this.commentService.createComment(responseToPost).subscribe(() => {
      this.getResponse();
    });
  }

  getResponse() {
    this.commentService.getResponseCommentById().subscribe(((data: Comment[]) => {
      this.responses = data;
      this.dataResponse.emit(this.responses);
    }));
  }

}
