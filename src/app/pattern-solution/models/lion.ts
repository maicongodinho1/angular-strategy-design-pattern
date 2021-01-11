import { Animal } from "./animal";

export class Lion implements Animal {
  specie = "🦁";

  makeSound() {
    console.log("Grraaaauuuu");
  }
}
