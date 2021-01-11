import { Animal } from "./animal";
import { AnimalRoar } from "./animal-roar";

export class Duck implements Animal, AnimalRoar {
  specie = "🦆";

  // yes, my duck roars too 🦆 🦆 🦆
  roar() {
    console.log("Quak quak");
  }
}
