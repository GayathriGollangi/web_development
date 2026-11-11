function DisplayDetails(name, age) {
  this.name = name;
  this.age = age;
  this.city = "hyd";
}

let std1 = new DisplayDetails("john", 21);
console.log(std1);
let std2 = new DisplayDetails("Kevin", 22);
console.log(std2);
