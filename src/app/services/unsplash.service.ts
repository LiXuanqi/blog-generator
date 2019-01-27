import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UNSPLASH_API, UNSPLASH_ACCESS_KEY } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  constructor(
    private http: HttpClient
  ) {}
  getRandomPhoto() {
    const headers = new HttpHeaders().set('X-Skip-Interceptor', '');
    return this.http.get(`${UNSPLASH_API}/photos/random?client_id=${UNSPLASH_ACCESS_KEY}`, { headers });
  }
}

// https://api.unsplash.com/photos/random?client_id=93fc141a31cdd449eefd35f3c9038d002391f3e5c97b54b18366d9399f1fc3e7
