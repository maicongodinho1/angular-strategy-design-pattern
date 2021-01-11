import { Component } from "@angular/core";

@Component({
  selector: "no-pattern-solution",
  templateUrl: "./no-pattern-solution.component.html",
  styleUrls: ["./no-pattern-solution.component.css"]
})
export class NoPatternSolutionComponent {
  dog = "🐶";
  cat = "🐱";
  duck = "🦆";
  lion = "🦁";

  roar(animal: string) {
    switch (animal) {
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
