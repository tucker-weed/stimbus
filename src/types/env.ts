export {};

declare global {
  interface Events extends DocumentEventMap {
    hideModal: void;
  }

  type EventKey = keyof Events;
  type Listener = (event: Events[EventKey]) => unknown;
}
