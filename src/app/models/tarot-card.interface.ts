export interface TarotCard {
    id: number;
    name: string;
    image: string;
    meaning: string;
    text: string;
    reversed_text: string;
    reversed?: boolean;
}