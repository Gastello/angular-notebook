import { Component } from '@angular/core';
import { DirectiveNgSwitchComponent } from "./directive-ng-switch/directive-ng-switch.component";
import { DirectiveNgForComponent } from "./directive-ng-for/directive-ng-for.component";
import { DirectiveNgIfComponent } from "./directive-ng-if/directive-ng-if.component";

@Component({
  selector: 'app-04-structure-directives',
  imports: [DirectiveNgSwitchComponent, DirectiveNgForComponent, DirectiveNgIfComponent],
  templateUrl: './structure-directives.component.html',
  styleUrl: './structure-directives.component.scss'
})
export class StructureDirectivesComponent {

}
