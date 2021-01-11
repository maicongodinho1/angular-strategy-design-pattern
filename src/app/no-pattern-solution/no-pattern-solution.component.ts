import { Component, OnInit } from "@angular/core";
import { Animal } from "./models/animal";

@Component({
  selector: "no-pattern-solution",
  templateUrl: "./no-pattern-solution.component.html",
  styleUrls: ["./no-pattern-solution.component.css"]
})
export class NoPatternSolutionComponent {
  animals: Animal[] = [
    {
      specie: "🐶"
    },
    {
      specie: "🐱"
    },
    {
      specie: "🦆"
    },
    {
      specie: "🦉"
    }
  ];

  makeSound(animal: Animal) {
    switch (animal.specie) {
      case "🐶":
        console.log("Auuuuuuu");
        break;
      case "🐱":
        console.log("Miauuuuu");
        break;
      case "🦆":
        console.log("Quak quak");
        break;
      case "🦉":
        console.log("Oooowlll oooowlll");
        break;
    }
  }
}
