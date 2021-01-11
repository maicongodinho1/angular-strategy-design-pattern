import { Animal } from "./animal";

export class Duck implements Animal {
  specie = "🦆";

  makeSound() {
    console.log("Quak quak");
  }
}
