import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, tap, filter, take } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { SubjectBookResponse, Work } from '../models/SubjectBookResponse';
import { BookDetails } from '../models/SingleBookResponse';
import { AuthorDetails } from '../models/AuthorModel';
import { AuthorWorkDetails } from '../models/AuthorWorkModel';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private cache = new Map<string, any>();
  basePath = environment.apiBasePath;
  // url = `${this.basePath}/subjects/finance.json?details=true&limit=9&offset=0`;
  url = '/assets/books.json'

  constructor(private http: HttpClient) { }

  getSubjectBooks(offset=0): Observable<SubjectBookResponse> {
    if (this.cache.has(this.url)) {
      // Return cached observable
      return of(this.cache.get(this.url));
    } else {
      // Fetch from the API and cache the result
      return this.http.get<SubjectBookResponse>(this.url).pipe(
        tap(data => {
          this.cache.set(this.url, data);
        })
      );
    }
  }

  getBookByKey(key: string): Observable<Work | undefined> {
    return this.getSubjectBooks().pipe(
      map(data => data.works),
      map(books => books.find(item => item.cover_edition_key === key)),
      filter(item => !!item),
      take(1)
    );
  }

  getBookDetailsByKey(id: string): Observable<BookDetails | undefined> {
    const bookKey = `OLID:${id}`;
    const bookAPI = `https://openlibrary.org/api/books?bibkeys=${bookKey}&jscmd=data&format=json`
    return this.http.get<{ [key: string]: any }>(bookAPI).pipe(
      map(data => data[bookKey] as BookDetails)
    )
  }

  getAuthorDetailsByKey(key: string): Observable<AuthorDetails | undefined> {
    const authorAPI = `https://openlibrary.org${key}.json`;
    return this.http.get<AuthorDetails>(authorAPI)
  }

  getAuthorWorksByKey(key: string): Observable<AuthorWorkDetails | undefined> {
    const authorWorkAPI = `https://openlibrary.org${key}/works.json?limit=5`;
    return this.http.get<AuthorWorkDetails>(authorWorkAPI)
  }
}
