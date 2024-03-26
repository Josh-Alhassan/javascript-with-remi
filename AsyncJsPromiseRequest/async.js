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

// >>>>>>>> Resolving/Rejecting W/ Values <<<<<<<<

function fakeRequest(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Joshua" },
          { id: 5, username: "Abel" },
        ],
        "/about": "This is the about page",
      };

      const data = pages[url];
      console.log(data);

      if (data) {
        resolve({ status: 200, data: data });
      } else {
        reject({ status: 404 });
      }
    }, 2000);
  });
}

// Calling the fakeRequest Function
fakeRequest("/users")
  .then((res) => {
    console.log("Status Code: ", res.status);
    console.log("Data ", res.data);
    console.log("Request Worked!");
  })
  .catch((res) => {
    console.log(res.status);
    console.log("Request Failed");
  });

//This is a FAKE Http Request Function
//It takes 1 second to resolve or reject the promise, depending on the url that is passed in
const fakeRequests = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Bilbo" },
          { id: 5, username: "Esmerelda" },
        ],
        "/users/1": {
          id: 1,
          username: "Bilbo",
          upvotes: 360,
          city: "Lisbon",
          topPostId: 454321,
        },
        "/users/5": {
          id: 5,
          username: "Esmerelda",
          upvotes: 571,
          city: "Honolulu",
        },
        "/posts/454321": {
          id: 454321,
          title: "Ladies & Gentlemen, may I introduce my pet pig, Hamlet",
        },
        "/about": "This is the about page!",
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data }); //resolve with a value!
      } else {
        reject({ status: 404 }); //reject with a value!
      }
    }, 1000);
  });
};

fakeRequests("/users")
  .then((res) => {
    console.log(res);
    const id = res.data[0].id;
    return fakeRequests(`/users/${id}`);
  })
  .then((res) => {
    console.log(res);
    const postId = res.data.topPostId;
    return fakeRequests(`/posts/${postId}`);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("OH NO!", err);
  });

// ************************************************
// ATTEMPT 2 (deliberate error to illustrate CATCH)
// ************************************************
// fakeRequest('/users')
// 	.then((res) => {
// 		console.log(res);
// 		const id = res.data[0].id;
// 		return fakeRequest(`/useALSKDJrs/${id}`); //INVALID URL, CATCH WILL RUN!
// 	})
// 	.then((res) => {
// 		console.log(res);
// 		const postId = res.data.topPostId;
// 		return fakeRequest(`/posts/${postId}`);
// 	})
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log('OH NO!', err);
// 	});

const table = {
  nameOfTable: "Office Desk",
  numOfLegs: 2,
  color: "brown",
  width: 1000 + "cm",
  height: 3000 + "cm",

  makeSentence: function () {
    return `${this.nameOfTable} has a total number of ${this.numOfLegs} legs with a color of ${this.color}`;
  },
};

// let nameOfTable = "Resturant Desk";
// let numOfLegs = 4;
// let color = "orange";

// let makeSentence =
//   nameOfTable +
//   "has a total number of " +
//   numOfLegs +
//   "legs " +
//   "with a color of " +
//   color;

// console.log(makeSentence);

console.log(table.height);
console.log(table.width);
console.log(table.makeSentence());

document.getElementById("title").value;
