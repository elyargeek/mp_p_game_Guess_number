"use strict";
const weekdayss = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHourse = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[1]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 1}`]: {
    open: 0,
    close: 24 + 12,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic bread", " Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ساده شده - enhanced object litral
  openingHourse,
  openingHourse: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order recived ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} ad ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is youre declicious pasta with ${ing1}, ${ing2}, ${ing3},`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(`mainIngredient : ${mainIngredient} and
otherIngredients : ${otherIngredients}`);
  },
};

// --------- Destructuring Array-----------------------------

// Switching Variables
let [f, , th] = restaurant.categories;
console.log(f, th); // Italian Vegetarian

[f, th] = [th, f];
console.log(f, th); // Vegetarian Italian

// Recive 2 return value from a function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main); // Garlic bread Pizza

// Nested Destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); // 2 [5, 6]

const [a, , [b, c]] = nested;
console.log(a, b, c); // 2 5 6

// Default value
const [p = 3, q = 3, r = 3] = [1, 2];
console.log(q, p, r); // 2 1 3

// --------- Destructuring Object ----------------------------

// برداشت از آبجکت
// check test
const { name, openingHoursee, categories } = restaurant;

// تغییر اسم
const { name: restaurantName, openingHourse: hourse } = restaurant;
console.log(restaurantName, hourse);

// مقدار دیفالت
const { menu = [], starterMenu: starter_2 = [] } = restaurant;
console.log(menu, starter_2);

// عوض کردن مقدار متغیر
let aa = 111;
let bb = 999;
const object = { aa: 23, bb: 7, cc: 14 };
console.log(aa, bb); // 111 999

({ aa, bb } = object);
console.log(aa, bb); // 23 7

// آبجکت های تو در تو
const {
  fri: { open: o, close: cc },
} = openingHourse;
console.log(o, cc); // 11 23

restaurant.orderDelivery({
  time: "22:30",
  address: "ahmad Abad",
  mainIndex: 2,
  starterIndex: 2,
});

// ------ Spread Operator ------------------------------------

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnoci"];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 Array
const menu_2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu_2);

const firstName = "eLyar";
const letters = [...firstName, ""];
console.log(letters); //['e', 'L', 'y', 'a', 'r', " "]

// const ingredients = [
//   prompt("let's make pasta! Ingredient 1 ?"),
//   prompt(" Ingredient 2 ?"),
//   prompt(" Ingredient 3 ?"),
// ];

// restaurant.orderPasta(...ingredients);

// spread operator in obj
const newRestarant = { ...restaurant, founder: "Guiseppe", foundeIn: 1998 };
console.log(newRestarant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "eLyar cafee";

console.log(restaurantCopy.name); // eLyar cafee
console.log(restaurant.name); // Classico Italiano

// -------- Rest Pattern & Parameters ------------------------

// spread operator -- right (...)
const arr_2 = [1, 2, 3, ...[4, 5]];
console.log(...arr_2); // 1 2 3 4 5

// rest operator
const [a1, b1, ...others] = [1, 2, 3, 4, 5];
console.log(a1, b1, others); // 1 2 [3,4,5]

// mainMenu: ["Pizza", "Pasta", "Risotto"]
// starterMenu: ["Focaccia", "Bruschetta", "Garlic bread", " Caprese Salad"],

const [Pizza, , risotto, ...othersFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Pizza, risotto, othersFood);
// Pizza Risotto (4) ['Focaccia', 'Bruschetta', 'Garlic bread', ' Caprese Salad']

// Rest operator in obj

// openingHourse: {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0,
//     close: 24,
//   },
// },

const { sat, ...weekdays } = restaurant.openingHourse;
console.log(weekdays);

// Rest Operator in function
const add = function (...Numbers) {
  let sum = 0;
  for (let i = 0; i < Numbers.length; i++) {
    sum += Numbers[i];
  }
  console.log(sum);
};

add(1, 2, 3, 4, 5);

const x = [23, 5, 7];
add(...x);

// Rest Parameters

restaurant.orderPizza("mushroom", "onion", "olives", "spinach");

restaurant.orderPizza("mushroom");

// -------- And Or Operator ----------------------------------

// OR

// اولین ولیو با ارزش درست ریترن میشه
// Use any data type
console.log(3 || "eLyar"); // 3 => first true value
console.log("" || "eLyar"); // eLyar
console.log(undefined || null); // null => کلا نداشته باشیم آخری رو میده

// استفاده از این اوپراتور
// restaurant.numGuest = 23;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

const guest2 = restaurant.numGuest || 10;
console.log(guest2);

// AND

console.log(0 && "eLyar"); // => اولین اشتباه رو میده بیرون
console.log("e" && "moz"); // moz

// مثال کاربردی

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushroom", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("ananas", "apple");

// ------ Nullish coalescing operator ------------------------

restaurant.numGuest = 0;
const guest3 = restaurant.numGuest || 10;
console.log(guest2);

const que = restaurant.numGuest ?? 10;
console.log(que);

//  فقط نالیش ولیو ها فالسی هستن -- یعنی فقط نان و آندی فایند نالیش هستن و بقیه موارد فالسی مثل صفر درست هستن

// just undefiend and null is falsy value (??)

// ---- Logic assigment Operator
const rest1 = {
  name: "Capri",
  numGuest: 20,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanna Rossi",
};

// rest2.numGuest = rest2.numGuest || 10;

// Or Assignment Operator
rest2.numGuest ||= 10; // rest2.numGuest = rest2.numGuest || 10;

// Nullish assignment Operator (for zereo)
rest1.numGuest ??= 10;

console.log(rest1);
console.log(rest2);

// And assignment Operator
// rest2.owner = rest2.owner && "<ananymose>";
// rest1.owner = rest2.owner && "<ananymose>";
// این آندی فایند میده و چاپ میشه
rest1.owner &&= "<ananymose>"; // این هیچی در نظر نمیگیره دقت کنید
rest2.owner &&= "<ananymose>";

// دقت کنید این دوتا یک کار باید انجام بدن ولی تویه خروجی اندی فایند مشابهه نیستن

// در واقع اگر فالسی باشه ست نمیشه

// # coding chalenge 1 ---------------------------------------

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Task 1
const [players1, players2] = game.players;

// Task 2
const [gk, ...fieldPlayers] = players1;

// Task 3
const allPlayers = [...players1, ...players2];

// Task 4
const substituteBM = ["Thiago", "Coutinho"];
const players1Final = [...players1, ...substituteBM, "Perisic"];

// Task 5
const { team1, x: draw, team2 } = { ...game.odds };

// teacher
const {
  odds: { team11, xx: draww, team22 },
} = game;

// Task 6
const printGoals = function (...players) {
  let number = [...players].length;
  console.log(...players, `with ${number} goals`);

  // teacher
  console.log(players.length);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

// Task 7
team1 < team2 && console.log("tim 1 wins");
team2 < team1 && console.log("tim 2 wins");

console.log("===============================================");
// -------- For of loop --------------------------------------

const menu_3 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu_3) {
  console.log(item);
}

// for index (with for of)
// for (const item of menu_3.entries()) {
//   // console.log(item);
//   console.log(`${item[0] + 1} : ${item[1]}`);
// }

for (const [i, el] of menu_3.entries()) {
  console.log(`${i + 1} : ${el}`);
}

// ----- Enhanced Object litral ------------------------------
