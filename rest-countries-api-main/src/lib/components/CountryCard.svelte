<script lang="ts">
  import type { MinimalCountryInfo } from "$lib/types";

  export let country: MinimalCountryInfo;
</script>

<article
  class="grid grid-rows-2 bg-white dark:bg-dark-blue-500 text-dark-blue-100 dark:text-white rounded-md shadow-md shadow-[rgb(0,0,0,0.075)]"
>
  <img
    src={country.flag}
    alt={`Flag of ${country.name}`}
    class="rounded-t-md"
    width="320"
  />
  <div class="flex flex-col p-6 gap-4">
    <h2 class="font-bold text-xl">{country.name}</h2>
    <div class="flex flex-col">
      <p><span class="font-semibold">Population: </span>{country.population}</p>
      <p><span class="font-semibold">Region: </span>{country.region}</p>
      <p><span class="font-semibold">Capital: </span>{country.capital}</p>
    </div>
  </div>
</article>
