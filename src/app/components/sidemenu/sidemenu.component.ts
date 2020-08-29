import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user';
import { CommentService } from './../../shared/services/comment.service';
import { Comment } from './../../shared/models/comment';
import { PopupSignOutComponent } from '../popup-sign-out/popup-sign-out.component';
import { environment, Environment } from './../../../environments/environment';
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  @Output() dataForGroup = new EventEmitter<Comment[]>();
  @Output() CloseSide = new EventEmitter<string>();
  varEnv: Environment;
  currentUser: User;

  constructor(public dialog: MatDialog, private router: Router, private commentService: CommentService,
              private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
    this.varEnv = environment;
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
      this.dataForGroup.emit(data);
    }));
  }

  toggleSide() {
    this.CloseSide.emit('close');
  }
}
