import ApplicationController from "../index";

test("Application controller extends stimulus Controller", () => {
  expect(JSON.stringify(ApplicationController.blessings.entries())).toBe("{}");
});
