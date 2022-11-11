import { Listener } from "../types/env";

export default class EventBus<T, K extends keyof T> {
  #bus: Partial<Record<K, Listener[]>>;
  #events: Record<string, Partial<Record<K, Listener>>>;

  constructor() {
    this.#events = {};
    this.#bus = {};
  }

  addEvent(callerId: string, type: K, listener: Listener) {
    if (!this.#events[callerId]) {
      this.#events[callerId] = {};
    }
    this.#events[callerId][type] = listener;
    this.#bus[type]?.push(listener);
  }

  removeEvent(callerId: string, type: K) {
    const listener = this.#events[callerId][type];
    if (!listener) {
      return;
    }
    this.#bus[type] = this.#bus[type]?.filter((x) => x !== listener);
    delete this.#events[callerId][type];
  }

  trigger(type: K, detail?: unknown) {
    this.#bus[type]?.forEach((x) => x(detail));
  }
}
