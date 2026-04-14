import { Component, signal, ChangeDetectionStrategy, computed } from '@angular/core';
import { TarotService } from '../../services/tarot.service';
import { Card, DrawnCard, MinorArcanaCard, TarotCard } from '../../models/tarot-card.interface';
import { TarotCardComponent } from '../tarot-card/tarot-card.component';
import { MinorCardComponent } from '../minor-card/minor-card.component';
import { POSITION_MEANINGS } from '../../data/tarot-card.data';

@Component({
  selector: 'app-tarot-board',
  imports: [TarotCardComponent, MinorCardComponent],
  templateUrl: './tarot-board.component.html',
  styleUrls: ['./tarot-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TarotBoardComponent {

  cards = signal<DrawnCard[]>([]);
  interpretation = computed(() => this.cards().map(drawn => {
    const c = drawn.card
    if(c.isMayor) {
      const mayorCard = c as TarotCard;
      return mayorCard.reversed ? mayorCard.reversed_text : mayorCard.text;
    } else {
      const minorCard = c as MinorArcanaCard;
      const { position } = drawn;

      return `<strong>${POSITION_MEANINGS[position]}</strong>: ${minorCard.meaning}`;
    }
  }).join('<br/>'));

  constructor(private tarotService: TarotService) { }

  draw() {
    this.cards.set(this.tarotService.drawCards(5)); // tirada de 5 cartas
  }
}