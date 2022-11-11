import { Context, Controller } from "@hotwired/stimulus";
import { Listener, Constructor } from "./types/env";
import EventBus from "./util/bus";

export default function Stimbus<T, K extends keyof T, TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    readonly #eventBus = new EventBus<T, K>();
    declare context: Context;

    constructor(...args: any[]) {
      super(args);
      this.context = args as unknown as Context;
    }

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
