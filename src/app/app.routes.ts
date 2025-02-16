import { Routes } from '@angular/router';
import { InputOutputComponent } from './pages/07-input-output/input-output.component';
import { HomeComponent } from './pages/00-tasks-in-progress/home.component';
import { MainCommandsComponent } from './pages/01-main-commands/main-commands.component';
import { InterpolationComponent } from './pages/03-interpolation/interpolation.component';
import { StructureDirectivesComponent } from './pages/04-structure-directives/structure-directives.component';
import { AttributeDirectivesComponent } from './pages/05-attribute-directives/attribute-directives.component';
import { PipesComponent } from './pages/06-pipes/pipes.component';
import { HomeWorkButtonComponent } from './pages/home-work-1-button/home-work-button.component';
import { HomeWorkDropdownComponent } from './pages/home-work-2-dropdown/home-work-dropdown.component';
import { NgModelComponent } from './pages/08-ng-model/ng-model.component';
import { ConstructorNgoninitNgondestroyComponent } from './pages/09-constructor-ngoninit-ngondestroy/constructor-ngoninit-ngondestroy.component';
import { GetDataFromApiComponent } from './pages/11-get-data-from-api/get-data-from-api.component';
import { ServicesComponent } from './pages/12-services/services.component';
import {HomeWorkServicesComponent} from './pages/home-work-3-services/home-work-services.component';
import {ReactiveFormsComponent} from './pages/13-reactive-forms/reactive-forms.component';
import {HomeWorkReactiveFormsComponent} from './pages/home-work-4-reactive-forms/home-work-reactive-forms.component';
import {ObservableComponent} from './pages/10-observable/observable.component';
import {
  SubjectAndHotObservableComponent
} from './pages/14-subject-and-hot-observable/subject-and-hot-observable.component';
import {SignalsComponent} from './pages/15-signals/signals.component';
import {NgTemplateNgContainerComponent} from './pages/16-ng-template-ng-container/ng-template-ng-container.component';
import {ModulesComponent} from './pages/02-modules/modules.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'main-commands', component: MainCommandsComponent },
  { path: 'input-output-page', component: InputOutputComponent },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'structure-directives', component: StructureDirectivesComponent },
  { path: 'attribute-directives', component: AttributeDirectivesComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'home-work-button', component: HomeWorkButtonComponent },
  { path: 'home-work-dropdown', component: HomeWorkDropdownComponent },
  { path: 'ng-model', component: NgModelComponent },
  { path: 'constructor-ngoninit-ngondestroy', component: ConstructorNgoninitNgondestroyComponent },
  { path: 'get-data-from-api', component: GetDataFromApiComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'homework-services', component: HomeWorkServicesComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'homework-reactive-forms', component: HomeWorkReactiveFormsComponent },
  { path: 'rxjs-observable', component: ObservableComponent },
  { path: 'subject-and-hot-observable', component: SubjectAndHotObservableComponent },
  { path: 'signals', component: SignalsComponent },
  { path: 'ng-template-ng-container', component: NgTemplateNgContainerComponent },
  { path: 'modules', component: ModulesComponent },
];
