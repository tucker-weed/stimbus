import { Controller } from "@hotwired/stimulus";
import { Listener } from "./types/env";
import EventBus from "./util/bus";

const eventBus = new EventBus();

export default class ApplicationController<ElementType extends Element = Element> extends Controller<ElementType> {
  on(type: string, listener: Listener) {
    eventBus.addEvent(this.context.identifier, type, listener);
  }

  off(type: string) {
    eventBus.removeEvent(this.context.identifier, type);
  }

  trigger(type: string, detail?: unknown) {
    return eventBus.trigger(type, detail);
  }
}
