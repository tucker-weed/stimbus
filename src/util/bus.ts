import { Listener } from "../types/env";

export default class EventBus {
  #bus: Record<string, Listener[]>;
  #events: Record<string, Partial<Record<string, Listener>>>;

  constructor() {
    this.#events = {};
    this.#bus = {};
  }

  addEvent(callerId: string, type: string, listener: Listener) {
    if (!this.#events[callerId]) {
      this.#events[callerId] = {};
    }
    this.#events[callerId][type] = listener;
    this.#bus[type].push(listener);
  }

  removeEvent(callerId: string, type: string) {
    const listener = this.#events[callerId][type];
    if (!listener) {
      return;
    }
    this.#bus[type] = this.#bus[type].filter(x => x !== listener);
    delete this.#events[callerId][type];
  }

  trigger(type: string, detail?: unknown) {
    this.#bus[type].forEach(x => x(detail))
  }
}
