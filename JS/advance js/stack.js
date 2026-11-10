function logA() {
  console.log("A");
}
function logB() {
  console.log("B");
}
function logD() {
  console.log("D");
}
// Executes immediately
logA();
// Executes logB after 5 seconds
setTimeout(logB, 5000);
// Executes the callback function after 1 second
setTimeout(function () {
  console.log("c");
}, 1000);
// Executes immediately without waiting for setTimeout
logD();
