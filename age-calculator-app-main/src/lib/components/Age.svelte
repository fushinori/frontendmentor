<script lang="ts">
  import { fade } from "svelte/transition";
  export let date: number;
  export let name: string;
</script>

<p class="font-extrabold italic text-[2.75rem] md:text-5xl leading-none">
  {#key date}
    <span class="text-purple" in:fade={{ duration: 600 }}
      >{date === 0 ? "--" : date}</span
    >
    {name}
  {/key}
</p>

