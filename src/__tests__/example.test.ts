import { Controller } from "@hotwired/stimulus";
import Stimbus from "../index";

test("Application controller extends stimulus Controller", () => {
  expect(JSON.stringify(Stimbus(Controller).blessings.entries())).toBe("{}");
});
