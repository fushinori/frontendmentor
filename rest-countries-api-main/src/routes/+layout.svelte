<script lang="ts">
  import "../styles.css";
  import Header from "$lib/components/Header/Header.svelte";
</script>

<!-- Add to head to prevent FOUC -->
<svelte:head>
  <script>
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  </script>
</svelte:head>
<Header />
<main class="">
  <slot />
</main>
