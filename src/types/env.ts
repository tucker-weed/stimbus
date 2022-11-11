import { Controller } from "@hotwired/stimulus";

export interface ControllerWithEventBus<T, K extends keyof T> extends Controller {
  on: (type: K, listener: Listener) => void;
  off: (type: K) => void;
  trigger: (type: K, detail?: unknown) => void;
}

export type Listener = (detail?: unknown) => unknown;
