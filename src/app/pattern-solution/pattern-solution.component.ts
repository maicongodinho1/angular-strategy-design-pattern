import { Component } from "@angular/core";
import { Cat } from "./models/cat";
import { Dog } from "./models/dog";
import { Duck } from "./models/duck";
import { Lion } from "./models/lion";

@Component({
  selector: "pattern-solution",
  templateUrl: "./pattern-solution.component.html",
  styleUrls: ["./pattern-solution.component.css"]
})
export class PatternSolutionComponent {
  dog = new Dog();
  cat = new Cat();
  duck = new Duck();
  lion = new Lion();
}
