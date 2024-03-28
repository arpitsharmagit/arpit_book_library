import { Component } from '@angular/core';
import { SubjectBookResponse } from '../../models/SubjectBookResponse';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  booksResponse: SubjectBookResponse | undefined;

  constructor(private bookService: BooksService, private router: Router,) {
  }


  ngOnInit() {
    this.bookService.getSubjectBooks().subscribe({
      next: (data: SubjectBookResponse) => {
        this.booksResponse = data;
      },
      error: (error) => {
        console.error('There was an error fetching the subject details', error);
      }
    });
  }

  navigateTo(route: string, id: string) {
    if (id) {
      this.router.navigate([route, id]);  
    }
    else {
      this.router.navigate([route]);  
    }
  }
}
