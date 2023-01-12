<script lang="ts">
  import { dark } from "../../../store";
  import lightIcon from "$lib/assets/light-mode.svg";
  import darkIcon from "$lib/assets/dark-mode.svg";

  let lightbutton: HTMLButtonElement;
  let darkbutton: HTMLButtonElement;

  const handleClick = () => {
    // Add animation to buttons only when clicked
    // This prevents the animation when the buttons are first rendered
    lightbutton.classList.add("animate-fade");
    darkbutton.classList.add("animate-fade");
    localStorage.setItem("theme", $dark ? "light" : "dark");
    dark.update((theme) => !theme);
    document.documentElement.classList.toggle("dark");
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
