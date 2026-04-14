import { Injectable } from '@angular/core';
import { TAROT_CARDS } from '../data/tarot-card.data';
import { TarotCard } from '../models/tarot-card.interface';

@Injectable({
    providedIn: 'root'
})
export class TarotService {

    drawCards(count: number): TarotCard[] {
        const shuffled = [...TAROT_CARDS].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count).map(card => ({
            ...card,
            reversed: Math.random() > 0.5
        }));
    }
}