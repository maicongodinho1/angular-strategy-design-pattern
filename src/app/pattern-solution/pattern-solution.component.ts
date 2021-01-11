import { Component } from "@angular/core";

// A interface estratégia declara operações comuns a todas as
// versões suportadas de algum algoritmo. O contexto usa essa
// interface para chamar o algoritmo definido pelas estratégias
// concretas.
interface Strategy {
  execute(a: number, b: number): number;
}

// Estratégias concretas implementam o algoritmo enquanto seguem
// a interface estratégia base. A interface faz delas
// intercomunicáveis no contexto.
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

// O contexto define a interface de interesse para clientes.
class Context {
  // O contexto mantém uma referência para um dos objetos
  // estratégia. O contexto não sabe a classe concreta de uma
  // estratégia. Ele deve trabalhar com todas as estratégias
  // através da interface estratégia.
  private _strategy: Strategy;

  // Geralmente o contexto aceita uma estratégia através do
  // construtor, e também fornece um setter para que a
  // estratégia possa ser trocado durante o tempo de execução.
  public set strategy(strategy: Strategy) {
    this._strategy = strategy;
  }

  // O contexto delega algum trabalho para o objeto estratégia
  // ao invés de implementar múltiplas versões do algoritmo
  // por conta própria.
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

  // O código cliente escolhe uma estratégia concreta e passa ela
  // para o contexto. O cliente deve estar ciente das diferenças
  // entre as estratégia para que faça a escolha certa.
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
