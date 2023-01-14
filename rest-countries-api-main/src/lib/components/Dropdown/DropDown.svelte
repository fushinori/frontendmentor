<script lang="ts">
  import {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  } from "@rgossiaux/svelte-headlessui";

  export let title: string;
  export let options: string[];
  export let src: string;
  export let handleClick: (e: CustomEvent) => void;
</script>

<Menu
  class="text-dark-blue-100 relative dark:text-white text-sm font-semibold max-w-max"
  let:open
>
  <MenuButton
    class="flex justify-between gap-10 bg-white dark:bg-dark-blue-500 rounded-md px-6 py-4 shadow-md shadow-gray-900"
  >
    {title}
    <img
      {src}
      alt=""
      class={open ? "transition-transform rotate-180" : "transition-transform"}
      aria-hidden="true"
    />
  </MenuButton>
  <MenuItems
    class="flex flex-col absolute w-full gap-2 bg-white dark:bg-dark-blue-500 mt-2 p-4 rounded-md shadow-md shadow-gray-900"
  >
    {#each options as option}
      <MenuItem
        as="button"
        class={({ active }) =>
          active
            ? "text-left dark:text-cyan text-gray-700"
            : "text-left hover:dark:text-cyan hover:text-gray-700"}
        on:click={handleClick}>{option}</MenuItem
      >
    {/each}
  </MenuItems>
</Menu>
