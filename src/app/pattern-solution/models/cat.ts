import { Animal } from "./animal";
import { AnimalRoar } from "./animal-roar";

export class Cat implements Animal, AnimalRoar {
  specie = "🐱";

  roar() {
    console.log("Miauuuuu");
  }
}
