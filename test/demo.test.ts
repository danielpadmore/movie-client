import { addOne } from "../src";

describe("demo", () => {
  it("should add one", () => {
    const result = addOne(5);
    expect(result).toBe(6);
  });
});
