import { Listener, Constructor } from "./types/env";
import EventBus from "./util/bus";

export default function Stimbus<T, K extends keyof T, TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    readonly #eventBus = new EventBus<T, K>();

    on(type: K, listener: Listener) {
      this.#eventBus.addEvent(this.context.identifier, type, listener);
    }

    off(type: K) {
      this.#eventBus.removeEvent(this.context.identifier, type);
    }

    trigger(type: K, detail?: unknown) {
      return this.#eventBus.trigger(type, detail);
    }
  };
}
