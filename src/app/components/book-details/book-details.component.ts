import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.router.navigate(['users', id]);
  }
}
