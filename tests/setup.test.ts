import { useSetup } from "../src/setup";

describe("useSetup", () => {
  test("returns the correct templates", () => {
    const { templates } = useSetup();
    expect(templates.interface_template).toBe("default");
  });

  test("returns the correct colors", () => {
    const { colors } = useSetup();
    expect(colors).toHaveLength(25);
    expect(colors[0]).toEqual({ name: "reset", value: "\x1B[0m" });
    expect(colors[24]).toEqual({ name: "bg_gray", value: "\x1B[100m" });
  });

  test("returns the correct color value", () => {
    const { getColor } = useSetup();
    expect(getColor("fg_red")).toBe("\x1B[31m");
    expect(getColor("bg_yellow")).toBe("\x1B[43m");
    expect(getColor("invalid_color")).toBeUndefined();
  });
});
