/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(numbers) {
  // Your code here
  let l = numbers.length;

  if (l % 2 === 1) {
    return true;
  } else {
    return false;
  }
}
const numbers = [];
isArrayLengthOdd(numbers);
/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  // Your code here
  let l2 = numbers.length;

  if (l2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isArrayLengthEven([1, 2, 3]), " -> false");
/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {
  // Your code here
  instructors.push("Laila");
  return instructors;
}
console.log(
  addLailaToArray(["Mshary", "Hasan"]),
  ' -> ["Mshary", "Hasan", "Laila"]'
);
/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it.
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
  // Your code here
  const lastTeam = teams.pop();
  return lastTeam;
}
console.log(eliminateTeam(["Brazil", "Germany", "Italy"]), '-> "Italy"');
/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(fruits) {
  // Your code here
  let newfruits = fruits.slice(fruits.length / 2, fruits.length);
  return newfruits;
}
console.log(
  secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]),
  '-> ["banana", "kiwi"]'
);
/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */
function youGottaCalmDown(shout) {
  // Your code here
  const shout1 = shout.indexOf("!");
  const newShout = shout.slice(0, shout1 + 1);
  return newShout;
}
console.log(
  youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!"),
  '-> "Taylor Shwifting!"'
);
module.exports = {
  isArrayLengthOdd,
  isArrayLengthEven,
  addLailaToArray,
  eliminateTeam,
  secondHalfOfArrayIfItIsEven,
  youGottaCalmDown,
};
