export interface MinimalCountryInfo {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: string[];
  cca2: string;
}

interface Name {
  common: string;
  official: string;
}

interface Flag {
  png: string;
  svg: string;
}

export interface MinimalCountryResponse {
  name: Name;
  flags: Flag;
  region: string;
  capital: string[];
  population: number;
  cca2: string;
}

export type Region =
  | "Africa"
  | "Americas"
  | "Asia"
  | "Europe"
  | "Oceania"
  | "All";
