export interface DialogElement extends HTMLDialogElement {
  showModal(): void
  close(): void
}