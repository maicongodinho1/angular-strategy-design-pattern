import { Animal } from "./animal";

export class Dog implements Animal {
  specie = "🐶";

  makeSound() {
    console.log("Auuuuuuu");
  }
}
