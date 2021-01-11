import { Component, VERSION } from "@angular/core";

interface Animal {
  emoticon: string;
  name: string;
}

const ANIMALS: Animal[] = [
  {
    emoticon: "🐶",
    name: "dog"
  },
  {
    emoticon: "🐱",
    name: "cat"
  },
  {
    emoticon: "🦆",
    name: "duck"
  },
  {
    emoticon: "🦉",
    name: "owl"
  }
];

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  makeSound(animal: string) {
    switch (animal) {
      case "dog":
        console.log("Auuuuuuu");
        break;
      case "cat":
        console.log("Miauuuuu");
        break;
      case "duck":
        console.log("Quak quak");
        break;
      case "owl":
        console.log("Oooowlll oooowlll");
        break;
    }
  }
}
