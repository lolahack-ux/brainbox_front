import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('BrainBox');
  protected readonly message = signal(
    'Mon espace personnel de connaissances techniques.'
  );

  protected changerMessage(): void {
    this.message.set('La BrainBox est prête.');
  }
}
