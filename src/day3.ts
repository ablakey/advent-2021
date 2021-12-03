import fs from "fs";

/**
 * Part 1
 */
const input = fs.readFileSync("./day3_input.txt", "utf-8");
const parsedInput = input.split("\n").filter((i) => i.length); // Remove blank line EoF.

// Tally up count of each column.
const bitCounts = parsedInput.reduce((acc, i) => {
  const bits = i.split("").map((i) => parseInt(i));
  return bits.map((b, idx) => b + (acc[idx] ?? 0));
}, [] as number[]);

// Construct binary-based representation of values where 1 === >500
const gamma = parseInt(
  bitCounts.reduce((acc, n) => {
    return `${acc}${n > 500 ? 1 : 0}`;
  }, ""),
  2
);

// I wanted to just Bitwise NOT but JavaScript be JavaScript.
// const epsilon = ~gamma;
const epsilon = parseInt(
  bitCounts.reduce((acc, n) => {
    return `${acc}${n > 500 ? 0 : 1}`;
  }, ""),
  2
);

console.log(
  `Part 1 -- Gamma: ${gamma} (${gamma.toString(2)}). Epsilon: ${epsilon} (${epsilon.toString(2)}). Product: ${
    gamma * epsilon
  }`
);

/**
 * Part 2
 */

// Noooooope.  That thing is paragraphs long. It's probably not yet difficult but I promised to stop when I stopped having fun.
// Parsing a many paragraphs-long problem is not fun for me.
// See you in 2022!
