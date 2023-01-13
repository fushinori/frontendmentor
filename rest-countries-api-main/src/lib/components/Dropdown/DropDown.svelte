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
</script>

<Menu class="text-dark-blue-100" let:open>
  <MenuButton class="flex justify-between gap-10 bg-white rounded-sm px-8 py-4">
    {title}
    <img
      {src}
      alt=""
      class={open ? "transition-transform rotate-180" : "transition-transform"}
      aria-hidden="true"
    />
  </MenuButton>
  <MenuItems>
    {#each options as option}
      <MenuItem>{option}</MenuItem>
    {/each}
  </MenuItems>
</Menu>
