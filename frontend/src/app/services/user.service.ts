import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "../models/user";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {MessageService} from "./message.service";

@Injectable()
export class UserService {
  private _options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  private baseUrl = '/api/v2/json';

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  private handleErrorNew<T> (result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  addNewUser(user: User): Observable<number> {
    const url = `${this.baseUrl + '/users'}`;
    const body = JSON.stringify(user);
    return this.http.post<number>(url, body, this._options).pipe(
      tap(() => this.log(`addedUser`)),
      catchError(this.handleErrorNew<any>()));
  }

  private log(message: string) {
    this.messageService.add('UserService: ' + message);
  }

  getAllUsers(): Observable<User[]>{
    return this.http
      .get<User[]>(this.baseUrl + '/users')
      .pipe(catchError(this.handleErrorNew([])));
  }
}
