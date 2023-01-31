<script lang="ts">
  import Fuse from "fuse.js";

  import CountryCard from "$lib/components/CountryCard.svelte";
  import DropDown from "$lib/components/Dropdown/DropDown.svelte";
  import SearchBar from "$lib/components/SearchBar/SearchBar.svelte";

  import lightArrow from "$lib/assets/arrow-light.svg";
  import darkArrow from "$lib/assets/arrow-dark.svg";
  import type { Region } from "$lib/types";
  import { region, country } from "$lib/store";
  import type { PageData } from "./$types";

  export let data: PageData;

  $: filteredCountries = data.countries;

  const fuse = new Fuse(data.countries, {
    keys: ["name"],
    threshold: 0.2,
  });

  const filterByRegion = (region: Region) => {
    if (region === "All") {
      filteredCountries = data.countries;
    } else {
      filteredCountries = data.countries.filter(
        (country) => country.region === region
      );
    }
  };

  const filterBySearch = (country: string) => {
    let results = fuse.search(country);
    // Get MinimalCountryInfo[] from FuseResult<MinimalCountryInfo[]>
    filteredCountries = results.map(({ item }) => item);
  };

  const handleClick = (e: CustomEvent) => {
    if (e.target instanceof HTMLButtonElement) {
      region.set(e.target.innerText as Region);
    }
    filterByRegion($region);
  };

  const handleInput = () => {
    if ($country === "") {
      filterByRegion($region);
    } else {
      filterBySearch($country);
    }
  };

  $: dropdownData = {
    title: "Filter by Region",
    options: ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"],
    lightSrc: darkArrow,
    darkSrc: lightArrow,
    handleClick: handleClick,
  };
</script>

<svelte:head>
  <title>Where in the world?</title>
</svelte:head>
<div class="flex flex-col gap-8">
  <div class="flex flex-col gap-8 md:flex-row md:gap-0 md:justify-between">
    <SearchBar placeholder="Search for a country..." {handleInput} />
    <DropDown {...dropdownData} />
  </div>
  <div
    class="flex flex-col gap-4 items-center md:grid md:gap-8 md:items-stretch md:grid-cols-auto-fit-320"
  >
    {#each filteredCountries as country}
      <CountryCard {country} />
    {/each}
  </div>
</div>
