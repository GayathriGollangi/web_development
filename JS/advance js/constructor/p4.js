let person = {
  name: "John",
  age: 20,
};
function addProperties(city, state) {
  this.city = city;
  this.state = state;
}
// apply
addProperties.apply(person, ["hyd", "Tel"]);
console.log("person Details", person);
