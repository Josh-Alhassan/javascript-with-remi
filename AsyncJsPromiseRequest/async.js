// Call Stack

const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};

console.log(isRightTriangle(3, 4, 5));

// How Asynchronous JavaScript Actually works
console.log("I Happened First");
setTimeout(() => {
  console.log(" I happened 3rd");
}, 3000);

console.log("I happened 2nd");

// >>>>>>>> Introduction to Promises <<<<<<<<<
const willGetYouADog = new Promise(function (resolve, reject) {
  const random = Math.random();
  console.log(random);

  // Conditional
  if (random < 0.5) {
    resolve();
  } else {
    reject();
  }
});

console.log(willGetYouADog);
willGetYouADog.then(function () {
  console.log("AY, we have a Dog");
});

willGetYouADog.catch(() => {
  console.log("NO DOG!");
});

// >>>>>> Returning Promise from functions
function makeDogPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const random = Math.random();
      console.log(random);

      // Conditional
      if (random < 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 5000);
  });
}

makeDogPromise()
  .then(function () {
    console.log("I have a new Dog");
  })
  .catch(function () {
    console.log("No Dog for me");
  });
