function a() {
  let a = "hello";
  return function b() {
    let b = "world";
    return function c() {
      return `${a},${b}`;
    };
  };
}
let aop = a();
let bop = aop();
let cop = bop();
console.log(cop);

console.log(a()()());
