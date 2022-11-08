import { useStore } from "@nanostores/react";
import type { KeyboardEvent } from "react";
import { isMenuOpen } from "./navStore";

export default function MenuButton() {
  const $isMenuOpen = useStore(isMenuOpen);

  const handleClick = () => {
    isMenuOpen.set(!$isMenuOpen);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!$isMenuOpen) return;
    if (!["Esc", "Escape"].includes(e.key)) return;
    isMenuOpen.set(!$isMenuOpen);
  };

  let buttonClassName = "md:hidden z-10";
  if ($isMenuOpen) {
    buttonClassName += " fixed top-9 right-4";
  }

  return (
    <button
      className={buttonClassName}
      aria-controls="primary-nav"
      aria-expanded={$isMenuOpen}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {$isMenuOpen ? (
        <img src="/icon-menu-close.svg" alt="Close menu" />
      ) : (
        <img src="/icon-menu.svg" alt="Open menu" />
      )}
    </button>
  );
}
