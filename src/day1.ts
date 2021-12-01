import { promises as fs } from "fs";

async function getInput() {
  const input = await fs.readFile("./day1_input.txt", "utf-8");
  const parsedInput = input
    .split("\n")
    .map((i) => Number.parseInt(i))
    .filter((i) => !isNaN(i));

  return parsedInput;
}

const x = getInput();
