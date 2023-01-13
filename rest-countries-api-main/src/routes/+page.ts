import type { MinimalCountryInfo, MinimalCountryResponse } from "$lib/types";
import type { PageLoad } from "./$types";

// export const load = (async ({ fetch }) => {
//   const res = await fetch(
//     "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population"
//   );
//   if (!res.ok) {
//     throw new Error(`HTTP Error: ${res.status}`);
//   }
//   const rawCountries: MinimalCountryResponse[] = await res.json();
//   const countries: MinimalCountryInfo[] = [];
//   for (const country of rawCountries) {
//     countries.push({
//       name: country["name"]["official"],
//       flag: country["flags"]["svg"],
//       region: country["region"],
//       capital: country["capital"][0],
//       population: country["population"],
//     });
//   }
//
//   return {
//     countries: countries,
//   };
// }) satisfies PageLoad;
