import { useStore } from "@nanostores/react";
import { isMenuOpen } from "./navStore";

interface Props {
  links: string[];
}

export default function NavMobile({ links }: Props) {
  const $isMenuOpen = useStore(isMenuOpen);

  let className =
    "fixed top-0 right-0 md:hidden bg-off-white w-2/3 h-screen pl-6";
  if (!$isMenuOpen) {
    className += " hidden";
  }

  return (
    <nav className={className}>
      <ul className="relative top-40 flex flex-col gap-5 text-lg">
        {links.map((link) => (
          <li key={link}>
            <a href="/">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
