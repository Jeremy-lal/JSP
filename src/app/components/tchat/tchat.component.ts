import { CommentService } from './../../shared/services/comment.service';
import { Comment } from './../../shared/models/comment';
import { TchatService } from './../../shared/services/tchat.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tchat',
  templateUrl: './tchat.component.html',
  styleUrls: ['./tchat.component.scss']
})
export class TchatComponent implements OnInit, OnChanges {

  @Input() dataToDisplay: Comment[];
  locate: string;

  constructor(private tchatService: TchatService, private commentService: CommentService) { }

  ngOnInit() {
    this.locate = this.tchatService.locate;
  }

  ngOnChanges() {
    this.locate = this.tchatService.locate;
  }

}
