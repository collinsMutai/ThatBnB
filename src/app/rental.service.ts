import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rental } from './rental';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  // private rentals: Rental[] = [];
  baseUrl = 'http://localhost:3001/api/rentals';

  constructor(private http: HttpClient) {}

  getRentals(): Observable<Rental[]> {
    return this.http.get<Rental[]>(`${this.baseUrl}`);
  }
}
