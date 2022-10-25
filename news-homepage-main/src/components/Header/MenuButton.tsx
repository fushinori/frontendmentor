import { useStore } from "@nanostores/react";
import { isMenuOpen } from "./navStore";

export default function MenuButton() {
  const $isMenuOpen = useStore(isMenuOpen);

  const handleClick = () => {
    isMenuOpen.set(!$isMenuOpen);
  };

  return (
    <button className="md:hidden z-10" onClick={handleClick}>
      {$isMenuOpen ? (
        <img src="/icon-menu-close.svg" alt="Close menu" />
      ) : (
        <img src="/icon-menu.svg" alt="Open menu" />
      )}
    </button>
  );
}
