<script lang="ts">
  import lightArrow from "$lib/assets/back-arrow-light.svg";
  import darkArrow from "$lib/assets/back-arrow-dark.svg";

  const handleClick = () => {
    // Remembers user's previous scroll position
    window.history.back();
  };
</script>

<button
  class="bg-white dark:bg-dark-blue-500 text-dark-blue-100 dark:text-white text-xs flex max-w-[6rem] md:col-span-full justify-center gap-2 text-center w-full py-2 shadow-[0_0_4px_2px_rgba(0,0,0,0.1)]"
  on:click={handleClick}
>
  <img src={lightArrow} aria-hidden="true" class="hidden dark:block" alt="" />
  <img src={darkArrow} aria-hidden="true" class="dark:hidden" alt="" />
  Back
</button>
