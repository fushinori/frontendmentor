import { useStore } from "@nanostores/react";
import { isMenuOpen } from "./navStore";

interface Props {
  links: string[];
}

export default function NavMobile({ links }: Props) {
  const $isMenuOpen = useStore(isMenuOpen);

  let navClassName =
    "fixed top-0 right-0 md:hidden bg-off-white w-2/3 h-screen pl-6";
  let overlayClassName =
    "fixed top-0 left-0 w-1/3 h-screen md:hidden bg-black opacity-50";
  if (!$isMenuOpen) {
    navClassName += " hidden";
    overlayClassName += " hidden";
  }

  return (
    <>
      <nav id="primary-nav" className={navClassName}>
        <ul className="relative top-40 flex flex-col gap-5 text-lg">
          {links.map((link) => (
            <li key={link}>
              <a className="hover:text-soft-red" href="/">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={overlayClassName}></div>
    </>
  );
}
