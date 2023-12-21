import * as readline from "node:readline";
import type { Config } from "../types/config";

export async function usePrompt() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}
