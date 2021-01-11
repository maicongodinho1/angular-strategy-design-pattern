import { Animal } from "./animal";

export class Cat implements Animal {
  specie = "🐱";

  makeSound() {
    console.log("Miauuuuu");
  }
}
