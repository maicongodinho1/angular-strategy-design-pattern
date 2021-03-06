import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoPatternSolutionComponent } from './no-pattern-solution/no-pattern-solution.component';
import { PatternSolutionComponent } from './pattern-solution/pattern-solution.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NoPatternSolutionComponent, PatternSolutionComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
