/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  image: string;
  tags: string[]; // e.g. ["Chef's Signature", "Gluten-Free", "Vegetarian", "Spicy"]
  calories?: number;
}

export interface SpecialOffer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  code: string;
  discount: string;
  badge: 'Limited' | 'Featured' | 'Exclusive';
  image: string;
  expiryTime: string; // Time representation
}

export interface Review {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: 'dishes' | 'ambiance' | 'chef';
}

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'lounge' | 'window' | 'vip' | 'garden';
  specialRequests?: string;
  createdAt: string;
}
