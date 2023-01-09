// G TASK

const number = [4, 5, 12, 78, 3];
// console.log(number.indexOf());

function findBig(number) {
  let maxNum = number[0];

  for (let i = 0; i < number.length; i++) {
    if (number[i] > maxNum) {
      maxNum = number[i];
    }
  }
  return number.indexOf(maxNum);
}
console.log(findBig(number));

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
