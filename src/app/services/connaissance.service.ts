import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Connaissance } from '../models/connaissance';

@Injectable({
  providedIn: 'root'
})
export class ConnaissanceService {
private readonly apiUrl = 'http://localhost:3001';
  constructor(private http: HttpClient) {}
getAllConnaissances() {
  return this.http.get<Connaissance[]>(
    `${this.apiUrl}/allConnaissances`
  );
}
}
