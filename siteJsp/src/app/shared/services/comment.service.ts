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

  getCommunComment() {
    return this.http.get(CommentService.URL + 'grp/Commun');
  }

  getJsp1Comment() {
    return this.http.get(CommentService.URL + 'grp/Jsp1');
  }

  getJsp2Comment() {
    return this.http.get(CommentService.URL + 'grp/Jsp2');
  }

  getJsp3Comment() {
    return this.http.get(CommentService.URL + 'grp/Jsp3');
  }

  getJsp4Comment() {
    return this.http.get(CommentService.URL + 'grp/Jsp4');
  }

  getQuestionComment() {
    return this.http.get(CommentService.URL + 'grp/question');
  }

  createComment(newComment) {
    return this.http.post(CommentService.URL, newComment);
  }

  updateComment(updateComment) {
    return this.http.put(CommentService.URL, updateComment);
  }

  deleteComment(id) {
    return this.http.delete(CommentService.URL + id);
  }
}
