import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {MessageService} from "./message.service";
import {Category} from "../models/category";
import {Item} from "../models/item";

@Injectable()
export class ItemService {
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

  private log(message: string) {
    this.messageService.add('UserService: ' + message);
  }

  getAllCategories(): Observable<Category[]>{
    return this.http
      .get<Category[]>(this.baseUrl + '/categories')
      .pipe(catchError(this.handleErrorNew([])));
  }

  addNewCategory(category: Category): Observable<number> {
    const url = `${this.baseUrl + '/categories'}`;
    const body = JSON.stringify(category);
    return this.http.post<number>(url, body, this._options).pipe(
      tap(() => this.log(`addedCategory`)),
      catchError(this.handleErrorNew<any>()));
  }

  getAllItems(): Observable<Item[]>{
    return this.http
      .get<Item[]>(this.baseUrl + '/items')
      .pipe(catchError(this.handleErrorNew([])));
  }

  addNewItem(item: Item): Observable<number> {
    const url = `${this.baseUrl + '/items'}`;
    const body = JSON.stringify(item);
    return this.http.post<number>(url, body, this._options).pipe(
      tap(() => this.log(`addedItem`)),
      catchError(this.handleErrorNew<any>()));
  }
}
