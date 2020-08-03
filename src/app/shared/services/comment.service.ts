import { UserService } from 'src/app/shared/services/user.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from './../models/comment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  static URL = 'http://localhost:3000/comments/';

  toUpdate = false;
  locate = 'Commun';
  commentIdForResponse: number;

  constructor(private http: HttpClient, private userService: UserService) { }

  getComment(grp: string): Observable<Comment[]> {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.userService.token });
    return this.http.get<Comment[]>(CommentService.URL + 'grp/' + grp, {headers});
  }

  getCommentById(id: number): Observable<Comment> {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.userService.token });
    return this.http.get<Comment>(CommentService.URL + id, {headers});
  }

  getResponseComment(grp: string): Observable<Comment[]> {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.userService.token });
    return this.http.get<Comment[]>(CommentService.URL + 'response/grp/' + grp, {headers});
  }

  getResponseCommentById(): Observable<Comment[]> {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.userService.token });
    return this.http.get<Comment[]>(CommentService.URL + 'response/' + this.commentIdForResponse, {headers});
  }

  getNumberResponse(message: Comment): Observable<Count> {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.userService.token });
    return this.http.get<Count>(CommentService.URL + '/response/number/' + message.id, {headers});
  }

  createComment(newComment: Comment) {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.userService.token });
    return this.http.post(CommentService.URL, newComment, {headers});
  }

  updateComment(updateComment: Comment) {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.userService.token });
    const id = updateComment.id;
    return this.http.put(CommentService.URL + id, updateComment, {headers});
  }

  deleteComment(id: number) {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.userService.token });
    return this.http.delete(CommentService.URL + id, {headers});
  }
}

export interface Count {
  count: number;
}
