import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="card-container">
      <story-card></story-card>
      <story-card></story-card>
      <story-card></story-card>
      <story-card></story-card>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'HoMD';
}
