import { Observable } from 'rxjs';
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
  locate = 'Commun';

  openFormForResponse = false;
  commentIdForResponse: number;
  showResponseTchat = false;

  constructor(private http: HttpClient) { }

  getComment(grp: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(CommentService.URL + 'grp/' + grp);
  }

  getCommentById(id: number): Observable<Comment> {
    return this.http.get<Comment>(CommentService.URL + id);
  }

  getResponseComment(grp: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(CommentService.URL + 'response/grp/' + grp);
  }

  getResponseCommentById(message: Comment): Observable<Comment[]> {
    return this.http.get<Comment[]>(CommentService.URL + 'response/' + message.id);
  }

  getNumberResponse(message: Comment): Observable<Count> {
    return this.http.get<Count>(CommentService.URL + '/response/number/' + message.id);
  }

  createComment(newComment: Comment) {
    return this.http.post(CommentService.URL, newComment);
  }

  updateComment(updateComment: Comment) {
    const id = updateComment.id;
    return this.http.put(CommentService.URL + id, updateComment);
  }

  deleteComment(id: number) {
    return this.http.delete(CommentService.URL + id);
  }
}

export interface Count {
  count: number;
}
