import { Routes } from '@angular/router';

// Import components
import { HomeComponent } from './components/home/home.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { SearchBooksComponent } from './components/search-books/search-books.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

export const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect empty path to /home
{ path: 'home', component: HomeComponent },
{ path: 'book-details/:id', component: BookDetailsComponent }, // Assuming :id is a unique identifier for books
{ path: 'author-details/:id', component: AuthorDetailsComponent }, // Assuming :id is a unique identifier for authors
{ path: 'search', component: SearchBooksComponent },
{ path: 'wishlist', component: WishlistComponent }];
