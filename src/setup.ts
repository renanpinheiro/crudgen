import type { Config } from "./types/config";
import type { Color } from "./types/color";
import type { Flag } from "./types/flag";

export function useSetup() {
  const templates: Config = {
    interface_template: "default",
  };

  const colors: Color[] = [
    { name: "reset", value: "\x1B[0m" },
    { name: "bright", value: "\x1B[1m" },
    { name: "dim", value: "\x1B[2m" },
    { name: "underscore", value: "\x1B[4m" },
    { name: "blink", value: "\x1B[5m" },
    { name: "reverse", value: "\x1B[7m" },
    { name: "hidden", value: "\x1B[8m" },
    { name: "fg_black", value: "\x1B[30m" },
    { name: "fg_red", value: "\x1B[31m" },
    { name: "fg_green", value: "\x1B[32m" },
    { name: "fg_yellow", value: "\x1B[33m" },
    { name: "fg_blue", value: "\x1B[34m" },
    { name: "fg_magenta", value: "\x1B[35m" },
    { name: "fg_cyan", value: "\x1B[36m" },
    { name: "fg_white", value: "\x1B[37m" },
    { name: "fg_gray", value: "\x1B[90m" },
    { name: "bg_black", value: "\x1B[40m" },
    { name: "bg_red", value: "\x1B[41m" },
    { name: "bg_green", value: "\x1B[42m" },
    { name: "bg_yellow", value: "\x1B[43m" },
    { name: "bg_blue", value: "\x1B[44m" },
    { name: "bg_magenta", value: "\x1B[45m" },
    { name: "bg_cyan", value: "\x1B[46m" },
    { name: "bg_white", value: "\x1B[47m" },
    { name: "bg_gray", value: "\x1B[100m" },
  ];

  function getColor(color: string) {
    return colors.find((c) => c.name === color)?.value;
  }

  return {
    templates,
    colors,
    getColor,
  };
}
