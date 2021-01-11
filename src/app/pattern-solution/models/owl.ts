import { Animal } from "./animal";

export class Owl implements Animal {
  specie = "🦉";

  makeSound() {
    console.log("Oooowlll oooowlll");
  }
}
