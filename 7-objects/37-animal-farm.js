// Animal Farm 🐑
// Codédex

const pig = {
  name: "Napoleon",
  type: "pig",
  age: 63,
  makeSound() {
    return pig.name + " is a " + pig.age + " year old " + pig.type + " that goes oink!";
  }
};

const sheep = {
  name: "Mob",
  type: "sheep",
  age: 42,
  makeSound() {
    return sheep.name + " is a " + sheep.age + " year old " + sheep.type + " that goes baaaah!";
  }
};

const dog = {
  name: "Balto",
  type: "dog",
  age: 12,
  makeSound() {
    return dog.name + " is a " + dog.age + " year old " + dog.type + " that goes woof!";
  }
};

console.log(pig.makeSound());
console.log(sheep.makeSound());
console.log(dog.makeSound());
