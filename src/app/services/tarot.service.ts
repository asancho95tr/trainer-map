import { Injectable } from '@angular/core';
import { POSITION_MEANINGS, TAROT_CARDS } from '../data/tarot-card.data';
import { MinorArcanaCard, MinorSuit, Card, DrawnCard } from '../models/tarot-card.interface';

@Injectable({
    providedIn: 'root'
})
export class TarotService {

    drawCards(count: number): DrawnCard[] {
        const shuffled = [...TAROT_CARDS.map(c => ({ ...c, isMayor: true })), ...this.generateMinorArcana().map(c => ({ ...c, isMayor: false }))].sort(() => 0.5 - Math.random());
        const positions = Object.keys(POSITION_MEANINGS);
        return shuffled.slice(0, count).map((card, index) => ({
            card:{
            ...card,
            reversed: Math.random() > 0.5
        },
            position: positions[index]
        }));
    }

    generateMinorArcana(): MinorArcanaCard[] {

        const SUITS: MinorSuit[] = ['copas', 'oros', 'espadas', 'bastos'];

        const VALUES = [
            'As', '2', '3', '4', '5', '6', '7', '8', '9', '10',
            'Sota', 'Caballero', 'Reina', 'Rey'
        ];
        const cards: MinorArcanaCard[] = [];

        for (let suit of SUITS) {
            for (let value of VALUES) {
                const card = {
                    id: Math.floor(Math.random() * 1000),
                    suit,
                    value,
                    label: `${value} de ${suit}`,
                    meaning: "",
                    reversed: Math.random() > 0.5
                }
                card.meaning = this.getMinorMeaning(card);
                cards.push(card);
            }
        }

        return cards;
    }

    getMinorMeaning(card: MinorArcanaCard): string {
        const suitMap: any = {
            copas: 'emociones',
            oros: 'trabajo y estabilidad',
            espadas: 'conflictos y mente',
            bastos: 'acción y energía'
        };

        const valueMap: any = {
            'As': 'un inicio',
            '2': 'una decisión',
            '3': 'crecimiento',
            '4': 'estabilidad',
            '5': 'conflicto',
            '6': 'armonía',
            '7': 'un desafío',
            '8': 'progreso',
            '9': 'culminación',
            '10': 'cierre'
        };

        const base = `${valueMap[card.value]} en el ámbito de ${suitMap[card.suit]}`;

        return card.reversed
            ? `bloqueo o dificultad relacionada con ${base}`
            : base;
    }
}