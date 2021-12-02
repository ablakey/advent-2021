import fs from "fs";

/**
 * Part 1
 */
const input = fs.readFileSync("./day2_input.txt", "utf-8");
const parsedInput = input
  .split("\n")
  .filter((i) => i.length) // Remove blank line EoF.
  .map((i) => {
    const [direction, magnitude] = i.split(" ");
    return { direction, magnitude: parseInt(magnitude) };
  });

let horizontal = 0;
let depth = 0;

parsedInput.forEach(({ direction, magnitude }) => {
  switch (direction) {
    case "forward":
      horizontal += magnitude;
      break;
    case "up":
      depth -= magnitude;
      break;
    case "down":
      depth += magnitude;
      break;
    default:
      throw new Error(direction);
  }
});

console.log(`Part 1 -- Horizontal: ${horizontal}, Depth: ${depth}, Multiplied together: ${horizontal * depth}`);

/**
 * Part 2
 * Reset horizontal and depth now that we "learned" that they actually work differently and recalculate.
 */
horizontal = 0;
depth = 0;
let aim = 0;

parsedInput.forEach(({ direction, magnitude }) => {
  switch (direction) {
    case "forward":
      horizontal += magnitude;
      depth += magnitude * aim;
      break;
    case "up":
      aim -= magnitude;
      break;
    case "down":
      aim += magnitude;
      break;
    default:
      throw new Error(direction);
  }
});

console.log(`Part 2 -- Horizontal: ${horizontal}, Depth: ${depth}, Multiplied together: ${horizontal * depth}`);
