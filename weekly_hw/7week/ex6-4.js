function compareNum(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

const mySort = (...nums) => nums.sort(compareNum);
console.log(mySort(1,4,6,3,10));
