import { Routes } from '@angular/router';
import { InputOutputComponent } from './pages/input-output/input-output.component';
import { HomeComponent } from './pages/home/home.component';
import { MainCommandsComponent } from './pages/main-commands/main-commands.component';
import { InterpolationComponent } from './pages/interpolation/interpolation.component';
import { StructureDirectivesComponent } from './pages/structure-directives/structure-directives.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'main-commands', component: MainCommandsComponent },
  { path: 'input-output-page', component: InputOutputComponent },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'structure-directives', component: StructureDirectivesComponent },

];
