import { Comment } from './../../shared/models/comment';
import { CommentService } from './../../shared/services/comment.service';
import { TchatService } from './../../shared/services/tchat.service';
import { Router } from '@angular/router';
import { User } from './../../shared/models/user';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PopupSignOutComponent } from '../popup-sign-out/popup-sign-out.component';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  @Output() dataForGroup = new EventEmitter<Comment[]>();

  comments: Comment[];

  currentUser: User;

  constructor(public dialog: MatDialog, private userService: UserService, private router: Router, private tchatService: TchatService,
              private commentService: CommentService) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
  }

  logOut() {
    const dialogRef = this.dialog.open(PopupSignOutComponent, {
      width: '550px',
    });
  }

  sendDataForDisplay(where: string) {
    this.commentService.locate = where;
    this.router.navigateByUrl('/conversation');
    this.commentService.getComment(where).subscribe(((data: Comment[]) => {
      this.comments = data;
      this.dataForGroup.emit(this.comments);
    }));
  }

}
