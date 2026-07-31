import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnaissanceService } from '../../services/connaissance.service';
import { Connaissance } from '../../models/connaissance';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modification-connaissance',
  imports: [FormsModule],
  templateUrl: './modification-connaissance.html',
  styleUrl: './modification-connaissance.scss'

})
export class ModificationConnaissance implements OnInit {
  titre = '';
  type = '';
  technologies = '';
  description = '';
  code = '';
  projet = '';
  fichier = '';
  tags = '';

  idConnaissance = '';

  connaissance = signal<Connaissance | null>(null);

  constructor(
    private route: ActivatedRoute,
    private connaissanceService: ConnaissanceService
  ) { }

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

          this.connaissance.set(resultat);

          this.titre = resultat.titre || '';
          this.type = resultat.type || '';

          this.technologies = Array.isArray(resultat.technologies)
            ? resultat.technologies.join(', ') : '';

          this.description = resultat.description || '';
          this.code = resultat.code || '';
          this.projet = resultat.projet || '';
          this.fichier = resultat.fichier || '';

          this.tags = Array.isArray(resultat.tags)
            ? resultat.tags.join(', ')
            : '';
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
        enregistrerModification(): void {
          console.log('Modification demandée');

          console.log({
            id: this.idConnaissance,
            titre: this.titre,
            type: this.type,
            technologies: this.technologies,
            description: this.description,
            code: this.code,
            projet: this.projet,
            fichier: this.fichier,
            tags: this.tags
          });
        }
}