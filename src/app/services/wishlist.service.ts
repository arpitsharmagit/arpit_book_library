import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private storageKey = 'wishlist';

  constructor() { }

  getWishlist(): any[] {
    const wishlist = localStorage.getItem(this.storageKey);
    return wishlist ? JSON.parse(wishlist) : [];
  }

  addToWishlist(item: any): void {
    const wishlist = this.getWishlist();
    wishlist.push(item);
    localStorage.setItem(this.storageKey, JSON.stringify(wishlist));
  }

  removeFromWishlist(itemId: any): void {
    let wishlist = this.getWishlist();
    wishlist = wishlist.filter((item: any) => item.cover_edition_key !== itemId);
    localStorage.setItem(this.storageKey, JSON.stringify(wishlist));
  }

  isInWishlist(itemId: any): boolean {
    const wishlist = this.getWishlist();
    return wishlist.some((item: any) => item.cover_edition_key === itemId);
  }
}
