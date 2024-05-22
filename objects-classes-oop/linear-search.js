const orderedArr = [3, 17, 75, 80, 202];
orderedArr;

function linearSearch(array, value) {
  // Iterate through every element in the array:
  for (let i = 0; i < array.length; i++) {
    // If we find the value we're looking for, we return it:
    if (array[i] === value) {
      return value;
    }
    // If we reach an element that is greater than the value
    // we're looking for, we can exit the loop early:
    else if (array[i] > value) {
      break;
    }
  }
  // We return null if we do not find the value within the array:
  return null;
}

console.log(linearSearch(orderedArr, 202));

function binarySearch(array, value) {
  // First, we establish the lower and upper bounds of where the value
  // we're searching for can be. To start, the lower bound is the first
  // value in the array, while the upper bound is the last value:
  let lowerBound = 0;
  let upperBound = array.length - 1;

  // We begin a loop in which we keep inspecting the middlemost value
  // between the upper and lower bounds:
  while (lowerBound <= upperBound) {
    // We find the midpoint between the upper and lower bounds:
    // (We don't have to worry about the result being a non-integer
    // since in JavaScript, the result of division of integers will be a float.)
    let midpoint = Math.floor((upperBound + lowerBound) / 2);

    // We inspect the value at the midpoint:
    let valueAtMidpoint = array[midpoint];

    // If the value at the midpoint is the one we're looking for, we're done.
    // If not, we change the lower or upper bound based on whether we need
    // to guess higher or lower:
    if (value < valueAtMidpoint) {
      upperBound = midpoint - 1;
    } else if (value > valueAtMidpoint) {
      lowerBound = midpoint + 1;
    } else if (value === valueAtMidpoint) {
      return midpoint;
    }
  }

  // If we've narrowed the bounds until they've reached each other, that
  // means that the value we're searching for is not contained within
  // this array:
  return null;
}

console.log(binarySearch(orderedArr, 17));
