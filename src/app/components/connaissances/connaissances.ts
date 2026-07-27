import { Component, OnInit, signal } from '@angular/core';
import { ConnaissanceService } from '../../services/connaissance.service';
import { Connaissance } from '../../models/connaissance';

@Component({
  selector: 'app-connaissances',
  imports: [],
  templateUrl: './connaissances.html',
  styleUrl: './connaissances.scss',
})

export class Connaissances implements OnInit{
  connaissances = signal<Connaissance[]>([]);
  constructor(
    private connaissanceService: ConnaissanceService
  ) {}

  ngOnInit(): void {
    this.chargerConnaissances();
  }
  chargerConnaissances(): void {
  this.connaissanceService
    .getAllConnaissances()
    .subscribe({
      next: (resultat) => {
       this.connaissances.set(resultat);
        console.log('Connaissances reçues :', resultat);
      },
      error: (erreur) => {
        console.error(
          'Erreur lors de la récupération des connaissances :',
          erreur
        );
      }
    });
}
}