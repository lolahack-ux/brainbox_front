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

  getConnaissanceById(id: string) {
    return this.http.get<Connaissance>(
      `${this.apiUrl}/connaissance`,
      { 
        params: { id }
      } 
    );
  } 

  ajouterConnaissance(connaissance: Connaissance) {
    return this.http.post(
      `${this.apiUrl}/alimentation`,
      connaissance
    );
  }


interrogerAssistant(question: string) {
  return this.http.post(
    `${this.apiUrl}/assistant`,
    { question: question }
  );
}
}
