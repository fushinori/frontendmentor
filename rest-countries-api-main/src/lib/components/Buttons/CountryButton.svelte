<script lang="ts">
  export let name: string;
  export let code: string;
</script>

<a
  class="bg-white dark:bg-dark-blue-500 text-dark-blue-100 dark:text-white text-xs text-center w-full py-1 shadow-[0_0_4px_2px_rgba(0,0,0,0.1)]"
  href="/country/{code}"
  target="_self"
>
  {name}
</a>
