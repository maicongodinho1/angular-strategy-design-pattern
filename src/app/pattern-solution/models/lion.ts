import { Animal } from "./animal";
import { AnimalRoar } from "./animal-roar";

export class Lion implements Animal, AnimalRoar {
  specie = "🦁";

  roar() {
    console.log("Grraaaauuuu");
  }
}
