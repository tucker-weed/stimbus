import { Controller } from "@hotwired/stimulus";
import EventBus from "./util/bus";

const eventBus = new EventBus();

export default class ApplicationController<ElementType extends Element = Element> extends Controller<ElementType> {
  on(type: EventKey, listener: Listener) {
    eventBus.addEvent(this.context.identifier, type, listener);
  }

  off(type: EventKey) {
    eventBus.removeEvent(this.context.identifier, type);
  }

  trigger(type: EventKey, detail?: unknown) {
    return eventBus.trigger(type, detail);
  }
}
