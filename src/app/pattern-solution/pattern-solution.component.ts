import { Component, OnInit } from "@angular/core";
import { Animal } from "./models/animal";
import { Cat } from "./models/cat";
import { Dog } from "./models/dog";
import { Duck } from "./models/duck";
import { Owl } from "./models/owl";

@Component({
  selector: "pattern-solution",
  templateUrl: "./pattern-solution.component.html",
  styleUrls: ["./pattern-solution.component.css"]
})
export class PatternSolutionComponent {
  animals: Animal[] = [new Dog(), new Cat(), new Duck(), new Owl()];
}
