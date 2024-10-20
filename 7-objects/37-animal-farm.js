// Animal Farm 🐑
// Codédex

const pig = {
  name: "Napoleon",
  type: "pig",
  age: 63,
  makeSound() {
    console.log(pig.name + " is a " + pig.age + " year old " + pig.type + " that goes oink!");
  }
};

const sheep = {
  name: "Mob",
  type: "sheep",
  age: 42,
  makeSound() {
    console.log(sheep.name + " is a " + sheep.age + " year old " + sheep.type + " that goes baaaah!");
  }
};

const dog = {
  name: "Balto",
  type: "dog",
  age: 12,
  makeSound() {
    console.log(dog.name + " is a " + dog.age + " year old " + dog.type + " that goes woof!");
  }
};

pig.makeSound();
sheep.makeSound();
dog.makeSound();
