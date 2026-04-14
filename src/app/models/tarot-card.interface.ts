export type Card = (TarotCard | MinorArcanaCard) & {
    isMayor: boolean
};
export interface DrawnCard {
    card: Card;
    position: string;
}
export interface TarotCard {
    id: number;
    name: string;
    image: string;
    meaning: string;
    text: string;
    reversed_text: string;
    reversed?: boolean;
}

export type MinorSuit = 'copas' | 'oros' | 'espadas' | 'bastos';
export interface MinorArcanaCard {
    suit: MinorSuit;
    id: number;
    value: string;
    label: string;
    meaning: string;
    reversed?: boolean;
}