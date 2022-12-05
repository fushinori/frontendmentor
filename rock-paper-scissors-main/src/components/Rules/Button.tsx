import { useStore } from "@nanostores/preact";
import { isModalOpen } from "./modalStore";

export default function Button() {
  const $isModalOpen = useStore(isModalOpen);

  const handleClick = () => {
    isModalOpen.set(!$isModalOpen);
  };

  return (
    <button
      onClick={handleClick}
      class="border-white-100 border-[1px] rounded-lg p-2 uppercase text-white-100 tracking-widest w-32 absolute bottom-12"
    >
      Rules
    </button>
  );
}
