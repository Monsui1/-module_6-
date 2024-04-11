const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know'];
const uniqueArr = [];

arr.forEach(item => {
  if (!uniqueArr.includes(item)) {
    uniqueArr.push(item);
  }
});

console.log(uniqueArr);