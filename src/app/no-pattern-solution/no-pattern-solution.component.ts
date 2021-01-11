import { Component } from "@angular/core";

@Component({
  selector: "no-pattern-solution",
  templateUrl: "./no-pattern-solution.component.html",
  styleUrls: ["./no-pattern-solution.component.css"]
})
export class NoPatternSolutionComponent {
  a: number;
  b: number;
  r: number;
  selectedOperation: string;

  onOperationChange(newValue) {
    this.selectedOperation = newValue;
  }

  calculate() {
    switch (this.selectedOperation) {
      case "ADD":
        this.r = this.a + this.b;
        break;
      case "MULTIPLY":
        this.r = this.a * this.b;
        break;
      case "SUBTRACT":
        this.r = this.a - this.b;
        break;
    }
  }
}
