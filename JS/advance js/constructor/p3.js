let person = {
  name: "John",
  age: 20,
};
function addProperties(city, state) {
  this.city = city;
  this.state = state;
}

addProperties.call(person, "hyd", "Tel");
console.log(person);
