import { Comment } from '../../../shared/models/comment';
import { User } from '../../../shared/models/user';
import { UserService } from '../../../shared/services/user.service';
import { CommentService } from '../../../shared/services/comment.service';
import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  @Output() dataForGroup = new EventEmitter<Comment[]>();
  comments: Comment[];

  commentForm = new FormGroup({
    content: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  currentUser: User;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<CommentFormComponent>, public commentService: CommentService,
              private userService: UserService, @Inject(MAT_DIALOG_DATA) public commentForAction: Comment) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;

    if (this.commentService.toUpdate === true) {
      this.commentForm.controls.content.setValue(this.commentForAction.content);
    }
  }

  sendComment() {
    if ((this.currentUser.status !== 'admin' && this.currentUser.status !== 'superAdmin') && this.commentService.locate === 'Commun') {
      alert('La chaîne commun est réservée aux formateurs');
      return false;
    }
    const commentToPost: Comment = this.commentForm.value;
    commentToPost.user_id = this.userService.currentUser.id;
    commentToPost.grp = this.commentService.locate;
    if (this.commentForAction !== undefined) {
      commentToPost.comment_id = this.commentForAction.id;
    }
    this.commentService.createComment(commentToPost).subscribe(() => {
      this.commentForm.controls.content.setValue('');
      this.commentService.getComment(commentToPost.grp).subscribe(((data: Comment[]) => {
        this.comments = data;
        this.dataForGroup.emit(this.comments);
      }));
    });
  }

  getComment() {
    this.commentService.getComment(this.commentService.locate).subscribe(((data: Comment[]) => {
      this.comments = data;
      this.dataForGroup.emit(this.comments);
    }));
  }


  updateComment() {
    const commentToUpdate: Comment = this.commentForm.value;
    commentToUpdate.id = this.commentForAction.id;
    this.commentService.updateComment(commentToUpdate).subscribe((eventPosted) => {
      console.log(eventPosted);
    });
    this.dialogRef.close();
    this.userService.toUpdate = false;
  }

  clearContents(element) {
    element.value = '';
  }

  close() {
    this.dialogRef.close();
  }


}
