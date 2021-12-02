import fs from "fs";

/**
 * Part 1
 */
const input = fs.readFileSync("./day1_input.txt", "utf-8");
const parsedInput = input
  .split("\n")
  .map((i) => Number.parseInt(i))
  .filter((i) => !isNaN(i));

let increases = 0;
for (let x = 1; x < parsedInput.length; x++) {
  if (parsedInput[x] > parsedInput[x - 1]) {
    increases++;
  }
}

console.log(`Part 1 -- Depth measurements increased ${increases} times.`);

/**
 * Part 2
 */
let sumIncreases = 0;
for (let x = 3; x < parsedInput.length; x++) {
  const windowA = parsedInput[x - 1] + parsedInput[x - 2] + parsedInput[x - 3];
  const windowB = parsedInput[x] + parsedInput[x - 1] + parsedInput[x - 2];
  if (windowB > windowA) {
    sumIncreases++;
  }
}

console.log(`Part 2 -- Sum depth measurements increased ${sumIncreases} times.`);
