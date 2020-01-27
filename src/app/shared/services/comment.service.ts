import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Comment } from './../models/comment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  static URL = 'http://localhost:3000/comments/';

  toUpdate = false;
  commentsCommun: Comment[];

  constructor(private http: HttpClient) { }

  getComment(grp) {
    return this.http.get(CommentService.URL + 'grp/' + grp);
  }

  getResponseComment(grp) {
    return this.http.get(CommentService.URL + 'response/grp/' + grp);
  }

  createComment(newComment) {
    return this.http.post(CommentService.URL, newComment);
  }

  updateComment(updateComment: Comment) {
    const id = updateComment.id;
    return this.http.put(CommentService.URL + id, updateComment);
  }

  deleteComment(id) {
    return this.http.delete(CommentService.URL + id);
  }
}
