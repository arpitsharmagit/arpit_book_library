import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SubjectBookResponse } from '../models/SubjectBookResponse';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  basePath = environment.apiBasePath;
  jsonPath: string = '/assets/books.json';

  constructor(private http: HttpClient) { }

  getSubjectBooks(subject: string): Observable<SubjectBookResponse> {
    // const url = `${this.basePath}/subjects/${subject}.json?details=true&limit=9`;
    const url = this.jsonPath
    return this.http.get<SubjectBookResponse>(url);
  }
}
