import { Component } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  wishlist: any[] = [];

  constructor(private wishlistService: WishlistService, private router: Router) { }

  ngOnInit(): void {
    this.loadWishlist();
  }

  loadWishlist(): void {
    this.wishlist = this.wishlistService.getWishlist();
  }

  addItem(item: any): void {
    this.wishlistService.addToWishlist(item);
    this.loadWishlist();
  }

  removeItem(itemId: any): void {
    this.wishlistService.removeFromWishlist(itemId);
    this.loadWishlist();
  }

  isInWishlist(itemId: any): Boolean {
    return this.wishlistService.isInWishlist(itemId);
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
