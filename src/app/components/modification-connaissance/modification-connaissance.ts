import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnaissanceService } from '../../services/connaissance.service';
import { Connaissance } from '../../models/connaissance';

@Component({
  selector: 'app-modification-connaissance',
  imports: [],
  templateUrl: './modification-connaissance.html',
  styleUrl: './modification-connaissance.scss'
})
export class ModificationConnaissance implements OnInit {
  idConnaissance = '';

  connaissance: Connaissance | null = null;

  constructor(
    private route: ActivatedRoute,
    private connaissanceService: ConnaissanceService
  ) {}

  ngOnInit(): void {
    this.idConnaissance =
      this.route.snapshot.paramMap.get('id') || '';

    console.log(
      'Identifiant de la connaissance :',
      this.idConnaissance
    );

    this.chargerConnaissance();
  }

  chargerConnaissance(): void {
  console.log(
    'Chargement de la connaissance :',
    this.idConnaissance
  );

  this.connaissanceService
    .getConnaissanceById(this.idConnaissance)
    .subscribe({
      next: (resultat) => {
        console.log(
          'Connaissance récupérée :',
          resultat
        );

        this.connaissance = resultat;
      },

      error: (erreur) => {
        console.error(
          'Erreur lors de la récupération :',
          erreur
        );

        console.error(
          'Réponse du backend :',
          erreur.error
        );
      }
    });
}
}