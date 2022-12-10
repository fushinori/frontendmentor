import { useStore } from "@nanostores/preact";
import { useEffect, useRef } from "preact/hooks";
import { isModalOpen } from "./modalStore";

export default function Modal() {
  const mobileRef = useRef<HTMLButtonElement>(null);
  const desktopRef = useRef<HTMLButtonElement>(null);
  const $isModalOpen = useStore(isModalOpen);

  const changeModalState = () => {
    isModalOpen.set(!$isModalOpen);
  };

  const focusOnButton = () => {
    const width = window.innerWidth;
    if (width >= 768) {
      desktopRef.current?.focus;
    } else {
      mobileRef.current?.focus;
    }
  };

  useEffect(() => {
    focusOnButton();
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleClick = () => {
    changeModalState();
  };

  const noPropagate = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (["Esc", "Escape"].includes(e.key)) {
      changeModalState();
    }
    // Only one focusable element so keep focus on it
    if (e.key === "Tab") {
      e.preventDefault();
      focusOnButton();
    }
  };

  return (
    <>
      {/* Mobile */}
      <div
        className="md:hidden absolute top-0 h-full w-full bg-white-100 flex flex-col items-center justify-center gap-28 z-20"
        role="dialog"
        onKeyDown={handleKeyDown}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-desc"
      >
        <h2
          id="dialog-title"
          className="uppercase text-3xl font-bold text-indigo-100"
        >
          Rules
        </h2>
        <img src="/image-rules.svg" alt="" aria-hidden="true" />
        <p id="dialog-desc" class="sr-only">
          The outcome of the game is determined by 3 simple rules: Rock wins
          against scissors. Scissors win against paper. Paper wins against rock.
        </p>
        <button ref={mobileRef} onClick={handleClick}>
          <img src="/icon-close.svg" alt="Close Rules" />
        </button>
      </div>
      {/* Desktop */}
      <div
        class="hidden md:grid absolute top-0 h-full w-full bg-black bg-opacity-60 place-items-center"
        // Close modal when user clicks outside
        onClick={handleClick}
        role="dialog"
        onKeyDown={handleKeyDown}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-desc"
      >
        <div
          class="flex flex-col items-center bg-white-100 py-8 rounded-md px-8 gap-12"
          // Don't close modal when user clicks inside
          onClick={noPropagate}
        >
          <div class="flex justify-between items-center w-full">
            <h2
              id="dialog-title"
              class="uppercase text-4xl font-bold text-indigo-100"
            >
              Rules
            </h2>
            <button ref={desktopRef} onClick={handleClick}>
              <img src="/icon-close.svg" alt="Close Rules" />
            </button>
          </div>
          <img src="/image-rules.svg" alt="" aria-hidden="true" class="px-8" />
          <p id="dialog-desc" class="sr-only">
            The outcome of the game is determined by 3 simple rules: Rock wins
            against scissors. Scissors win against paper. Paper wins against
            rock.
          </p>
        </div>
      </div>
    </>
  );
}
