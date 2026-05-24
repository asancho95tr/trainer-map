export interface Marker {
  id: string;
  x: number; // porcentaje horizontal
  y: number; // porcentaje vertical
  entries: MarkerEntry[];
  color?: string;
}

export interface MarkerEntry {
  badge?: Badge;
  info: string;
  characters: Character[];
}

export interface Badge {
  name: string;
  image: string;
}

export type Character = Badge;
