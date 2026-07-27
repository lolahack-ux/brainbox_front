import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConnaissanceService } from '../../services/connaissance.service';


@Component({
  selector: 'app-assistant',
  imports: [FormsModule],
  templateUrl: './assistant.html',
  styleUrl: './assistant.scss',
})

export class Assistant {
  question = '';
 reponse = signal('');

  constructor(
  private connaissanceService: ConnaissanceService
) {}

  poserQuestion(): void {
  console.log('Question envoyée :', this.question);

  this.connaissanceService
    .interrogerAssistant(this.question)
    .subscribe({
     next: (resultat: any) => {
  console.log(
    "Réponse reçue de l'assistant :",
    resultat
  );

  this.reponse.set(resultat.reponse_ia);
},

      error: (erreur) => {
  console.error(
    "Erreur complète lors de l'appel à l'assistant :",
    erreur
  );

  console.error(
    'Réponse envoyée par le backend :',
    erreur.error
  );
}
    });
}
}