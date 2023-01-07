function findDoubler(arr) {
  let firstItem = arr[0].toLowerCase();
  let secondItem = arr[1].toLowerCase();
  for (let i = 0; i < secondItem.length; i++) {
    if (firstItem.indexOf(secondItem[i]) === -1) return false;
  }
  return true;
}
const a = findDoubler(["Mirzabek", "Ramazbek"]);
console.log(a);
