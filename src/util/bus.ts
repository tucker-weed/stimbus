export default class EventBus {
  #bus: Document
  #events: Record<string, Partial<Record<EventKey, Listener>>>

  constructor() {
    this.#bus = document
    this.#events = {}
  }

  addEvent(callerId: string, type: EventKey, listener: Listener) {
    this.#bus.addEventListener(type, listener)
    if (!this.#events[callerId]) {
      this.#events[callerId] = {}
    }
    this.#events[callerId][type] = listener
  }

  removeEvent(callerId: string, type: EventKey) {
    const listener = this.#events[callerId][type]
    if (!listener) {
      return
    }
      this.#bus.removeEventListener(type, listener)
    delete this.#events[callerId][type]
  }

  trigger(type: EventKey, detail?: unknown) {
    this.#bus.dispatchEvent(new CustomEvent(type, { detail })) 
  }
}
