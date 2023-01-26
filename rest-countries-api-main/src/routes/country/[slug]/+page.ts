import type { FullCountryResponse } from "$lib/types";
import type { PageLoad } from "./$types";

export const load = (async ({ fetch, params, parent }) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.slug}?fields=name,tld,currencies,capital,region,subregion,languages,borders,flags,population`
  );
  if (!res.ok) {
    throw new Error(`HTTP Error: ${res.status}`);
  }

  const country: FullCountryResponse = await res.json();
  const { countries } = await parent();

  return {
    country: country,
    countries: countries,
  };
}) satisfies PageLoad;
