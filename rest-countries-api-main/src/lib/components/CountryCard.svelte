<script lang="ts">
  import type { MinimalCountryInfo } from "$lib/types";

  export let country: MinimalCountryInfo;
</script>

<a href="/country/{country.cca3}">
  <article
    class="grid grid-rows-2 bg-white dark:bg-dark-blue-500 text-dark-blue-100 dark:text-white max-w-[320px] rounded-md shadow-xl"
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
        <p>
          <span class="font-semibold"
            >Population:
          </span>{country.population.toLocaleString("en-US")}
        </p>
        <p><span class="font-semibold">Region: </span>{country.region}</p>
        <p>
          <span class="font-semibold"
            >{country.capital.length > 1 ? "Capitals: " : "Capital: "}</span
          >{country.capital.length > 1
            ? country.capital.join(", ")
            : country.capital[0] || "None"}
        </p>
      </div>
    </div>
  </article>
</a>
