import type { MinimalCountryInfo, MinimalCountryResponse } from "$lib/types";
import type { PageLoad } from "./$types";

export const load = (async ({ fetch }) => {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,cca2"
  );
  if (!res.ok) {
    throw new Error(`HTTP Error: ${res.status}`);
  }
  const rawCountries: MinimalCountryResponse[] = await res.json();
  const countries: MinimalCountryInfo[] = [];
  for (const country of rawCountries) {
    countries.push({
      name: country["name"]["official"],
      flag: country["flags"]["svg"],
      region: country["region"],
      capital: country["capital"],
      population: country["population"],
      cca2: country["cca2"],
    });
  }

  // Alphabetically sort based on country names
  countries.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    else {
      return 1;
    }
  });

  return {
    countries: countries,
  };
}) satisfies PageLoad;
