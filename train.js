const ints = [0, -15, 5, -3, 2, -8, 9, -11];
const events = ints.filter(function (item) {
  return item > 0;
});
console.log(events);

// const list = [
//   "yaxshi talaba boling",
//   "togri boshliq tanlang va koproq hato qling",
//   "ozingizga ishlashingizni boshlang",
//   "siz kuchli bolgan narsalarni qling",
//   "yoshlarga investitsiya qling",
//   "nevaralar bilan birga dam oling",
// ];

// async function giveAdvice(a) {
//   if (typeof a !== "number") throw new Error("Insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a < 30) return list[1];
//   else if (a > 30 && a < 40) return list[2];
//   else if (a > 40 && a < 50) return list[3];
//   else if (a > 50 && a < 60) return list[4];
//   else {
//     return new Promise((resolve, rejact) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }

// console.log("training page ishga tushdi");
// const { kopaytirish } = require("./calculator");
// const hisoblash = require("./calculator");

// const natija = hisoblash.kopaytirish(4, 7);
// console.log("natija", natija);

// }
// async function run() {
//   try {
//     let javob = await giveAdvice(35);
//     console.log(javob);
//     javob = await giveAdvice(65);
//     console.log(javob);
//     javob = await giveAdvice(25);
//     console.log(javob);
//   } catch (err) {
//     console.log("Error Bor", err);
//   }
// }
// run();
// console.log("passed here 0");

// giveAdvice(43)
//   .then((data) => {
//     console.log("javob", data);
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   });
// console.log("passed here 1");

// const list = [
//   "yaxshi talaba boling",
//   "togri boshliq tanlang va koproq hato qling",
//   "ozingizga ishlashingizni boshlang",
//   "siz kuchli bolgan narsalarni qling",
//   "yoshlarga investitsiya qling",
//   "nevaralar bilan birga dam oling",
// ];

// function maslahatbering(a, callback) {
//   if (typeof a !== "number") callback("please insert number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     callback(null, list[5]);
//   }
// }

// maslahatbering(25, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob", data);
// });

// function calculate(a , callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if(a > 100) callback(null, "more than 100");
//   else {
//     callback(null, "less than 100");
//   }
// }

// calculate(140, (err, data) => {
//   if (err) console.log("ERROR", err);
//   console.log("javob" );
// });

// function stringReverse(ele) {
//   let result = ele.split("").reverse("").join("");

//   return result;
// }

// const new_ele = stringReverse("Software");
// console.log(new_ele);
// G TASK

// const number = [4, 5, 12, 78, 3];
// // console.log(number.indexOf());

// function findBig(number) {
//   let maxNum = number[0];

//   for (let i = 0; i < number.length; i++) {
//     if (number[i] > maxNum) {
//       maxNum = number[i];
//     }
//   }
//   return number.indexOf(maxNum);
// }
// console.log(findBig(number));

// function findDoubler(arr) {
//   const newarr = arr.split("");
//   // console.log(newarr);
//   const result = newarr.map((value, index) => {
//     if (value.includes(newarr[index + 1])) return true;
//     else {
//       return false;
//     }
//   });
//   return result.includes(true);
// }

// const a = findDoubler("hello");
// console.log(a);
