console.log(1);
let i = 0;
let id = setInterval(function () {
  i++;
  console.log(2);
  if (i == 5) {
    clearInterval(id);
  }
}, 2000);
console.log(3);
