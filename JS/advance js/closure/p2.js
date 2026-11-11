// closure

//outer function
function outer() {
  let count = 0;
  //inner function
  function inner() {
    //name can be accessed
    count++;
    console.log(count);
  }
  inner();
}
outer();
