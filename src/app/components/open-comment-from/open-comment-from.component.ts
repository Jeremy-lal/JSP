import { Comment } from './../../shared/models/comment';
import { CommentService } from './../../shared/services/comment.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CommentFormComponent } from '../comment-form/comment-form.component';

@Component({
  selector: 'app-open-comment-from',
  templateUrl: './open-comment-from.component.html',
  styleUrls: ['./open-comment-from.component.scss']
})
export class OpenCommentFromComponent implements OnInit {

  @Input() commentClick: Comment;
  constructor(private commentService: CommentService,  public dialog: MatDialog) { }

  ngOnInit() {
  }

  openCommentForm(): void {
    this.commentService.toUpdate = false;
    const dialogRef = this.dialog.open(CommentFormComponent, {
      width: '550px',
      data : this.commentClick
    });
  }
}
