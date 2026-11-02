"use client";

import { ReactNode, useEffect, useRef } from "react";

type ModalProps = { open: boolean; onClose: () => void; title: string; children: ReactNode };

export const Modal = ({ open, onClose, title, children }: ModalProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(event) => event.target === ref.current && onClose()}
      className="m-0 mt-auto w-full max-w-none rounded-t-2xl p-0 backdrop:bg-ink/45 sm:m-auto sm:max-w-md sm:rounded-2xl"
    >
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <h2 className="font-semibold">{title}</h2>
        <button onClick={onClose} aria-label="Close" className="text-muted hover:text-ink">
          ✕
        </button>
      </div>
      <div className="p-5">{children}</div>
    </dialog>
  );
};
