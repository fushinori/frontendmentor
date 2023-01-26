export interface MinimalCountryInfo {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: string[];
  cca3: string;
}

interface GenericName {
  common: string;
  official: string;
}

interface Name extends GenericName {
  nativeName: Record<string, GenericName>;
}

interface Currency {
  name: string;
  symbol: string;
}

interface Flag {
  png: string;
  svg: string;
}

export interface MinimalCountryResponse {
  name: GenericName;
  flags: Flag;
  region: string;
  capital: string[];
  population: number;
  cca3: string;
}

export interface FullCountryResponse extends MinimalCountryResponse {
  name: Name;
  subregion: string;
  languages: Record<string, string>;
  tld: string[];
  currencies: Record<string, Currency>;
  borders: string[];
}

export type Region =
  | "Africa"
  | "Americas"
  | "Asia"
  | "Europe"
  | "Oceania"
  | "All";
