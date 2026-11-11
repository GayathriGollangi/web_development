let person = {
  name: "Kevin",
  age: 20,
};
function addProperties(city, state) {
  this.city = city;
  this.state = state;
}
// bind
let perDetails = addProperties.bind(person, "hyd", "Tel");
// calling
perDetails();
console.log("person Detailss", person);
