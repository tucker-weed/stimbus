import { ApplicationController as Controller } from "../index";

test("Application controller extends stimulus Controller", () => {
  expect(JSON.stringify(Controller.blessings.entries())).toBe("{}");
});
