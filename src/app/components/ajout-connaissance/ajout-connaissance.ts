import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConnaissanceService } from '../../services/connaissance.service';
import { Connaissance } from '../../models/connaissance';

@Component({
  selector: 'app-ajout-connaissance',
  imports: [FormsModule],
  templateUrl: './ajout-connaissance.html',
  styleUrl: './ajout-connaissance.scss'
})
export class AjoutConnaissance {
  titre = '';
  type = '';
  technologies = '';
  description = '';
  code = '';
  projet = '';
  fichier = '';
  tags = '';

  messageSucces = '';
  messageErreur = '';

  constructor(
  private connaissanceService: ConnaissanceService
) {}

   ajouterConnaissance(): void {
    const technologiesTableau = this.technologies
      .split(',')
      .map((technologie) => technologie.trim())
      .filter((technologie) => technologie !== '');

    const tagsTableau = this.tags
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag !== '');

    const nouvelleConnaissance: Connaissance = {
      titre: this.titre,
      type: this.type,
      technologies: technologiesTableau,
      description: this.description,
      code: this.code || null,
      projet: this.projet,
      fichier: this.fichier || null,
      tags: tagsTableau
    };

    this.connaissanceService
      .ajouterConnaissance(nouvelleConnaissance)
      .subscribe({
        next: (resultat) => {
          console.log(
            'Connaissance enregistrée :',
            resultat
          );

          this.messageSucces =
            'La connaissance a bien été ajoutée.';

          this.messageErreur = '';

          this.viderFormulaire();
        },

        error: (erreur) => {
          console.error(
            "Erreur lors de l'ajout :",
            erreur
          );

          this.messageErreur =
            "Une erreur est survenue pendant l'ajout.";

          this.messageSucces = '';
        }
      });

    console.log(
      'Nouvelle connaissance :',
      nouvelleConnaissance
    );
  }

  viderFormulaire(): void {
    this.titre = '';
    this.type = '';
    this.technologies = '';
    this.description = '';
    this.code = '';
    this.projet = '';
    this.fichier = '';
    this.tags = '';
  }
}