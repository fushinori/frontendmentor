<script lang="ts">
  import { dark } from "../../../store";
  import { fade } from "svelte/transition";
  import lightIcon from "$lib/assets/light-mode.svg";
  import darkIcon from "$lib/assets/dark-mode.svg";

  const handleClick = () => {
    dark.update((theme) => !theme);
  };
</script>

<!-- Using if block instead of dynamically changing src, alt and mode for  -->
<!-- transitions to work properly -->
<div class="flex">
  {#if $dark}
    <button class="flex gap-2 font-semibold" on:click={handleClick} in:fade>
      <img src={lightIcon} alt="Switch to light mode" />
      Light mode
    </button>
  {:else}
    <button class="flex gap-2 font-semibold" on:click={handleClick} in:fade>
      <img src={darkIcon} alt="Switch to dark mode" />
      Dark mode
    </button>
  {/if}
</div>
