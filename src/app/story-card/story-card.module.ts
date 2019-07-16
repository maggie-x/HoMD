import { MatCardModule } from '@angular/material/card'
import { NgModule } from '@angular/core';
import { StoryCardComponent } from './story-card.component';

@NgModule({
    declarations: [StoryCardComponent],
    imports: [MatCardModule],
    exports: [MatCardModule],
})
export class StoryCardModule{}