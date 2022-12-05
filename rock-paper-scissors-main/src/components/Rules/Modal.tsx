import { useStore } from "@nanostores/preact";
import { useEffect, useRef } from "preact/hooks";
import { isModalOpen } from "./modalStore";

export default function Modal() {
  const ref = useRef<HTMLButtonElement>(null);
  const $isModalOpen = useStore(isModalOpen);

  const changeModalState = () => {
    isModalOpen.set(!$isModalOpen);
  };

  useEffect(() => {
    ref.current?.focus();
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleClick = () => {
    changeModalState();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (["Esc", "Escape"].includes(e.key)) {
      changeModalState();
    }
    // Only one focusable element so keep focus on it
    if (e.key === "Tab") {
      ref.current?.focus();
    }
  };

  return (
    <div
      className="absolute h-full w-full bg-white-100 top-0 flex flex-col items-center justify-center gap-28 z-10"
      role="dialog"
      onKeyDown={handleKeyDown}
    >
      <h2 className="uppercase text-3xl font-bold text-indigo-100">Rules</h2>
      <img src="/image-rules.svg" alt="" aria-hidden="true" />
      <button ref={ref} onClick={handleClick}>
        <img src="/icon-close.svg" alt="Close Rules" />
      </button>
    </div>
  );
}
