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

  messageSucces = signal('');
  messageErreur = signal('');

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
  const technologiesTableau = this.technologies
    .split(',')
    .map((technologie) => technologie.trim())
    .filter((technologie) => technologie !== '');

  const tagsTableau = this.tags
    .split(',')
    .map((tag) => tag.trim())
    .filter((tag) => tag !== '');

  const connaissanceModifiee: Partial<Connaissance> = {
  titre: this.titre,
  type: this.type,
  technologies: technologiesTableau,
  description: this.description,
  code: this.code || null,
  projet: this.projet,
  fichier: this.fichier || null,
  tags: tagsTableau
};

console.log(
  'Connaissance envoyée pour modification :',
  connaissanceModifiee
);

this.connaissanceService
  .modifierConnaissance(
    this.idConnaissance,
    connaissanceModifiee
  )
  .subscribe({
    next: (resultat) => {
      console.log(
        'Modification enregistrée :',
        resultat
      );

      this.messageSucces.set (
        'La connaissance a bien été modifiée.');

      this.messageErreur.set ('');
    },

    error: (erreur) => {
      console.error(
        'Erreur lors de la modification :',
        erreur
      );

      console.error(
        'Réponse du backend :',
        erreur.error
      );

      this.messageErreur.set(
        'Une erreur est survenue pendant la modification.');

      this.messageSucces.set('');
    }
  });
  }
}