import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author, Work } from '../../models/SubjectBookResponse';
import { BooksService } from '../../services/books.service';
import { BookDetails } from '../../models/SingleBookResponse';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  book: Work | undefined;
  bookDetails: BookDetails | undefined;
  constructor(private bookService: BooksService, private wishlistService: WishlistService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const key = this.activatedRoute.snapshot.params['id'];
    this.bookService.getBookByKey(key).subscribe((data) => {
      this.book = data;
    });
    this.bookService.getBookDetailsByKey(key).subscribe((data) => {
      this.bookDetails = data;
    });

  }

  getAuthorsString(authors: Author[] | undefined) {
    return authors?.map(x => x.name)?.join(", ") || ""
  }

  isInWishlist(itemId: any): Boolean {
    return this.wishlistService.isInWishlist(itemId);
  }

  addItem(item: any): void {
    this.wishlistService.addToWishlist(item);
  }

  removeItem(itemId: any): void {
    this.wishlistService.removeFromWishlist(itemId);
  }
}
