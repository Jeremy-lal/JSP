import { ScrollDirective } from './../../shared/directives/scroll.directive';
import { CommentService } from './../../shared/services/comment.service';
import { Comment } from './../../shared/models/comment';
import { TchatService } from './../../shared/services/tchat.service';
import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tchat',
  templateUrl: './tchat.component.html',
  styleUrls: ['./tchat.component.scss']
})
export class TchatComponent implements OnInit, OnChanges {

  @Input() dataToDisplay: Comment[];
  @ViewChild(ScrollDirective, {static: false}) Component;
  scroll: ScrollDirective;
  locate: string;

  constructor(private tchatService: TchatService, private commentService: CommentService) { }

  ngOnInit() {
    this.locate = this.tchatService.locate;
  }

  ngOnChanges() {
    this.locate = this.tchatService.locate;
  }
}
