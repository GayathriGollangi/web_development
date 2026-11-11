// closure

//outer function
function outer() {
  let name = "sam";
  //inner function
  function inner() {
    //name can be accessed
    console.log(name);
  }
  inner();
}
outer();
