import { useStore } from "@nanostores/preact";
import Button from "./Button";
import Modal from "./Modal";
import { isModalOpen } from "./modalStore";

export default function Rules() {
  const $isModalOpen = useStore(isModalOpen);

  return (
    <>
      {$isModalOpen && <Modal />}
      <Button />
    </>
  );
}
