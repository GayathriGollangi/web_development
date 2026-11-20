function evaluate(operator) {
  return function a(a) {
    return function b(b) {
      if (operator === "add") {
        console.log(a + b);
      } else if (operator === "sub") {
        console.log(a - b);
      } else if (operator === "mul") {
        console.log(a * b);
      }
    };
  };
}
evaluate("mul")(3)(4);
