<script>
  import "../styles.css";
  import { dark } from "../store";
  import Header from "$lib/components/Header/Header.svelte";
</script>

<div class:dark={$dark}>
  <main class="dark:bg-dark-blue-700 min-h-screen">
    <Header />
    <slot />
  </main>
</div>
