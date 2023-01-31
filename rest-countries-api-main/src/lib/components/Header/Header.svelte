<script lang="ts">
  import ThemeButton from "./ThemeButton.svelte";
</script>

<div class="bg-white dark:bg-dark-blue-500 shadow-md shadow-gray-900">
  <header
    class="flex justify-between py-8 px-4 text-dark-blue-700 max-w-[1500px] mx-auto bg-white dark:bg-dark-blue-500 dark:text-white "
  >
    <h1 class="font-extrabold"><a href="/">Where in the world?</a></h1>
    <ThemeButton />
  </header>
</div>
