import { Controller } from "@hotwired/stimulus";
import { Listener } from "./types/env";
import EventBus from "./util/bus";

export function useEventBus<T, K extends keyof T>(controller: Controller) {
  Object.assign(controller, {
    "#eventBus": new EventBus<T, K>(),
    on(type: K, listener: Listener) {
      this["#eventBus"].addEvent(controller.context.identifier, type, listener);
    },
    off(type: K) {
      this["#eventBus"].removeEvent(controller.context.identifier, type);
    },
    trigger(type: K, detail?: unknown) {
      this["#eventBus"].trigger(type, detail);
    },
  });
}

export type { ControllerWithEventBus } from "./types/env";
