// Generated by https://quicktype.io

export interface Celebrity {
  id:          string;
  age:         number;
  name:       string;
  nationality: string;
  occupation:  Occupation;
  peliculas:  string;
  alt_img?: string
}

export enum Occupation{
  actor= 'Actor',
  productor='Producer'
}