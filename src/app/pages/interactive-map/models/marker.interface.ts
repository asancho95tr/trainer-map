export interface Marker {
  id: string;
  x: number; // porcentaje horizontal
  y: number; // porcentaje vertical
  info: string;
  characters: Character[];
  badge?: Badge; // medalla asociada
  color?: string;
}

export interface Badge {
  name: string;
  image: string;
}

export type Character = Badge;
