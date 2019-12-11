import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Comment } from './../models/comment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  static URL = 'http://localhost:3000/api/comment/';

  toUpdate = false;
  commentsCommun: Comment[];

  constructor(private http: HttpClient) { }

  getCommunComment() {
    return this.http.get(CommentService.URL + 'Commun');
  }

  getJsp1Comment() {
    return this.http.get(CommentService.URL + 'Jsp1');
  }

  getJsp2Comment() {
    return this.http.get(CommentService.URL + 'Jsp2');
  }

  getJsp3Comment() {
    return this.http.get(CommentService.URL + 'Jsp3');
  }

  getJsp4Comment() {
    return this.http.get(CommentService.URL + 'Jsp4');
  }

  getQuestionComment() {
    return this.http.get(CommentService.URL + 'question');
  }

  createComment(newComment) {
    return this.http.post(CommentService.URL, newComment);
  }

  updateUser(updateComment) {
    return this.http.put(CommentService.URL, updateComment);
  }

  deleteComment(id) {
    return this.http.delete(CommentService.URL + id);
  }
}
