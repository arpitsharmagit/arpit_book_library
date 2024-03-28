import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorDetails } from '../../models/AuthorModel';
import { BooksService } from '../../services/books.service';
import { AuthorWorkDetails } from '../../models/AuthorWorkModel';

@Component({
  selector: 'app-author-details',
  standalone: true,
  imports: [],
  templateUrl: './author-details.component.html',
  styleUrl: './author-details.component.scss'
})
export class AuthorDetailsComponent {
  authorDetails: AuthorDetails | undefined
  authorWorksByKey: AuthorWorkDetails | undefined
  constructor(private bookService: BooksService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const key = this.activatedRoute.snapshot.params['id'];
    this.bookService.getAuthorDetailsByKey(key).subscribe((data) => {
      this.authorDetails = data;
    });
    this.bookService.getAuthorWorksByKey(key).subscribe((data) => {
      this.authorWorksByKey = data;
    });    
  }
}
