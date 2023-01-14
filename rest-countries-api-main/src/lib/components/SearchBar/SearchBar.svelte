<script lang="ts">
  import { country } from "$lib/store";

  export let placeholder: string;
  export let handleInput: () => void;
</script>

<input
  type="search"
  class="dark:bg-dark-blue-500 bg-white dark:bg-light-search bg-dark-search font-semibold text-dark-blue-100 bg-[length:20px_20px] dark:text-white dark:placeholder:text-white bg-no-repeat bg-[5%_50%] py-4 pl-16 rounded-md text-sm w-full max-w-sm shadow-md shadow-gray-900"
  {placeholder}
  bind:value={$country}
  on:input={handleInput}
/>
