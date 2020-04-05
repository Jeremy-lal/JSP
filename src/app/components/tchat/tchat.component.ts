import { User } from './../../shared/models/user';
import { ScrollDirective } from './../../shared/directives/scroll.directive';
import { CommentService } from './../../shared/services/comment.service';
import { Comment } from './../../shared/models/comment';
import { Component, OnInit, Input, OnChanges, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tchat',
  templateUrl: './tchat.component.html',
  styleUrls: ['./tchat.component.scss']
})
export class TchatComponent implements OnInit, OnChanges {

  @Input() dataToDisplay: Comment[];
  message: Comment;
  @ViewChild(ScrollDirective, { static: false }) Component;
  scroll: ScrollDirective;
  locate: string;
  opened = false;
  currentUser: User;
  mode = 'basic';

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.locate = this.commentService.locate;
  }

  ngOnChanges() {
    this.locate = this.commentService.locate;
  }

  displaySide(event) {
    this.opened = event;
  }

  giveMessage(event) {
    this.message = event;
  }

  nodisplay() {
    this.opened = false;
  }

  getData(event) {
    this.dataToDisplay = event;
  }

}
