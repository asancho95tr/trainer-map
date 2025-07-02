export interface Marker {
  x: number; // porcentaje horizontal
  y: number; // porcentaje vertical
  info: string;
  characters: Character[];
  badge?: Badge; // medalla asociada
  position?: 'top' | 'bottom'; // posición del tooltip
  alignment?: 'left' | 'right' | 'center'; // alineación del tooltip
}

export interface Badge {
  name: string;
  image: string;
}

export type Character = Badge;
