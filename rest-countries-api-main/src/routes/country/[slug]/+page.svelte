<script lang="ts">
  import BackButton from "$lib/components/Buttons/BackButton.svelte";
  import CountryButton from "$lib/components/Buttons/CountryButton.svelte";
  import CountryProperty from "$lib/components/CountryProperty.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  const country = data.country;
  const name = country.name.common;
  const languageCodes = Object.keys(country.languages);
  const languages = Object.values(country.languages).join(", ");
  let nativeName = "None";
  for (const languageCode of languageCodes) {
    if (country.name.nativeName.hasOwnProperty(languageCode)) {
      // Get native name in the language of the country
      nativeName = country.name.nativeName[languageCode].common;
    }
  }
  const capitalName = country.capital.length > 1 ? "Capitals" : "Capital";
  const capitalValue =
    country.capital.length > 1
      ? country.capital.join(", ")
      : country.capital[0] || "None";
  const tld = country.tld.join(", ");
  const currencies = Object.values(country.currencies).map(
    (currency) => currency.name
  );
  const currency = currencies.join(", ");

  const getBorderName = (code: string) => {
    for (const country of data.countries) {
      if (country.cca3 === code) {
        return country.name;
      }
    }
  };
</script>

<svelte:head>
  <title>Where in the world: {name}</title>
</svelte:head>
<div
  class="flex flex-col gap-8 mx-2 md:grid md:grid-cols-2 md:items-center text-dark-blue-100 dark:text-white"
>
  <BackButton />
  <!-- https://stackoverflow.com/a/43705979 -->
  <img
    src={country.flags.svg}
    alt={`Flag of ${name}`}
    class="max-w-[400px] self-center w-full"
  />
  <div class="flex flex-col gap-4 md:grid md:grid-cols-2 md:mt-12">
    <h2 class="text-xl font-extrabold md:col-span-full md:text-3xl md:mb-4">
      {name}
    </h2>
    <div class="flex flex-col gap-2 md:mb-12">
      <CountryProperty name="Native Name" value={nativeName} />
      <CountryProperty
        name="Population"
        value={country.population.toLocaleString("en-US")}
      />
      <CountryProperty name="Region" value={country.region} />
      <CountryProperty name="Sub region" value={country.subregion} />
      <CountryProperty name={capitalName} value={capitalValue} />
    </div>
    <div class="flex flex-col gap-2 md:mb-12">
      <CountryProperty name="Top Level Domain" value={tld} />
      <CountryProperty name="Currencies" value={currency} />
      <CountryProperty name="Languages" value={languages} />
    </div>
    {#if Array.isArray(country.borders) && country.borders.length}
      <div class="md:col-span-full">
        <p class="font-semibold mb-4">Border Countries:</p>
        <div class="grid md:grid-cols-auto-fit-120 grid-cols-auto-fit-80 gap-2">
          {#each country.borders as border}
            <CountryButton code={border} name={getBorderName(border)} />
          {/each}
        </div>
      </div>
    {/if}
  </div>
</div>
