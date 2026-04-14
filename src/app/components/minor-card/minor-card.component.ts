import { Component, computed, input } from '@angular/core';
import { Card, MinorArcanaCard } from '../../models/tarot-card.interface';

@Component({
  selector: 'app-minor-card',
  imports: [],
  templateUrl: './minor-card.component.html',
  styleUrl: './minor-card.component.scss',
})
export class MinorCardComponent {
  card = input.required<Card>();
  minorCard = computed(() => this.card() as MinorArcanaCard);
}
