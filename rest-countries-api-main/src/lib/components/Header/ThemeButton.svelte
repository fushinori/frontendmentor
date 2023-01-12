<script lang="ts">
  import { dark } from "../../../store";
  import lightIcon from "$lib/assets/light-mode.svg";
  import darkIcon from "$lib/assets/dark-mode.svg";
  import { browser } from "$app/environment";

  let lightbutton: HTMLButtonElement;
  let darkbutton: HTMLButtonElement;

  export const toggleTheme = (isDark: boolean) => {
    // Just return during SSR
    if (!browser) return;
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  const handleClick = () => {
    // Add animation to buttons only when clicked
    // This prevents the animation when the buttons are first rendered
    lightbutton.classList.add("animate-fade");
    darkbutton.classList.add("animate-fade");
    toggleTheme($dark);
  };
</script>

<div class="flex">
  <button
    class="dark:flex hidden gap-2 font-semibold"
    on:click={handleClick}
    bind:this={lightbutton}
  >
    <img src={lightIcon} alt="Switch to light mode" />
    Light mode
  </button>
  <button
    class="flex dark:hidden gap-2 font-semibold"
    on:click={handleClick}
    bind:this={darkbutton}
  >
    <img src={darkIcon} alt="Switch to dark mode" />
    Dark mode
  </button>
</div>
