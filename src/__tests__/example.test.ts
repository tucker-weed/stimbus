import { Context, Controller } from "@hotwired/stimulus";
import { useEventBus, ControllerWithEventBus } from "../index";

class TestController extends Controller<HTMLElement> {
  initialize() {
    useEventBus<DocumentEventMap, keyof DocumentEventMap>(this);
  }
  connect() {
    useEventBus<DocumentEventMap, keyof DocumentEventMap>(this);
  }
  testMethod(this: ControllerWithEventBus<DocumentEventMap, keyof DocumentEventMap>) {
    this.on("abort", () => {});
  }
}

test("Application controller extends stimulus Controller", () => {
  expect(new TestController({} as Context)).toBeDefined();
});
