// function add(a,b,c){
//     return a+b+c;
// } into currying
function a(a) {
  return function b(b) {
    return function c(c) {
      return a + b + c;
    };
  };
}
console.log(a(1)(2)(3));
