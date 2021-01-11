import { Component } from "@angular/core";

// The strategy interface declares operations common to all
// supported versions of some algorithm. The context uses this
// interface to call the algorithm defined by the concrete
// strategies.
interface Strategy {
  execute(a: number, b: number): number;
}

// Concrete strategies implement the algorithm while following
// the base strategy interface. The interface makes them
// interchangeable in the context.
class ConcreteStrategyAdd implements Strategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}

class ConcreteStrategyMultiply implements Strategy {
  execute(a: number, b: number): number {
    return a * b;
  }
}

class ConcreteStrategySubtract implements Strategy {
  execute(a: number, b: number): number {
    return a - b;
  }
}

// The context defines the interface of interest to clients.
class Context {
  // The context maintains a reference to one of the strategy
  // objects. The context doesn't know the concrete class of a
  // strategy. It should work with all strategies via the
  // strategy interface.
  private _strategy: Strategy;

  // Usually the context accepts a strategy through the
  // constructor, and also provides a setter so that the
  // strategy can be switched at runtime.
  public set strategy(strategy: Strategy) {
    this._strategy = strategy;
  }

  // The context delegates some work to the strategy object
  // instead of implementing multiple versions of the
  // algorithm on its own.
  executeStrategy(a: number, b: number): number {
    return this._strategy.execute(a, b);
  }
}

@Component({
  selector: "pattern-solution",
  templateUrl: "./pattern-solution.component.html",
  styleUrls: ["./pattern-solution.component.css"]
})
export class PatternSolutionComponent {
  a: number;
  b: number;
  r: number;
  selectedOperation: string;

  onOperationChange(newValue) {
    this.selectedOperation = newValue;
  }

  // The client code picks a concrete strategy and passes it to
  // the context. The client should be aware of the differences
  // between strategies in order to make the right choice.
  calculate() {
    let context = new Context();

    switch (this.selectedOperation) {
      case "ADD":
        context.strategy = new ConcreteStrategyAdd();
        break;
      case "MULTIPLY":
        context.strategy = new ConcreteStrategyMultiply();
        break;
      case "SUBTRACT":
        context.strategy = new ConcreteStrategySubtract();
        break;
    }

    this.r = context.executeStrategy(this.a, this.b);
  }
}
