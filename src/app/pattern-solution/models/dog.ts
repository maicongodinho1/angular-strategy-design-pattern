import { Animal } from "./animal";
import { AnimalRoar } from "./animal-roar";

export class Dog implements Animal, AnimalRoar {
  specie = "🐶";

  roar() {
    console.log("Auuuuuuu");
  }
}
