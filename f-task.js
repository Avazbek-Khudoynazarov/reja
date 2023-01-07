function findDoubler(arr) {
  const newarr = arr.split("");
  // console.log(newarr);
  const result = newarr.map((value, index) => {
    if (value.includes(newarr[index + 1])) return true;
    else {
      return false;
    }
  });
  return result.includes(true);
}

const a = findDoubler("hello");
console.log(a);
