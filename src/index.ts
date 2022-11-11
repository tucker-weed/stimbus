import { Controller } from "@hotwired/stimulus";
import { Listener } from "./types/env";
import EventBus from "./util/bus";

export default class ApplicationController<
  T,
  K extends keyof T,
  ElementType extends Element = Element,
> extends Controller<ElementType> {
  private readonly eventBus = new EventBus<T, K>();

  on(type: K, listener: Listener) {
    this.eventBus.addEvent(this.context.identifier, type, listener);
  }

  off(type: K) {
    this.eventBus.removeEvent(this.context.identifier, type);
  }

  trigger(type: K, detail?: unknown) {
    return this.eventBus.trigger(type, detail);
  }
}
