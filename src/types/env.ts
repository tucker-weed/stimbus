import { Controller } from "@hotwired/stimulus";

export type Listener = (detail?: unknown) => unknown;
export type Constructor = new (...args: any[]) => Controller;
