import { Routes } from '@angular/router';
import { InputOutputComponent } from './pages/input-output/input-output.component';
import { HomeComponent } from './pages/home/home.component';
import { MainCommandsComponent } from './pages/main-commands/main-commands.component';
import { InterpolationComponent } from './pages/interpolation/interpolation.component';
import { StructureDirectivesComponent } from './pages/structure-directives/structure-directives.component';
import { AttributeDirectivesComponent } from './pages/attribute-directives/attribute-directives.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { HomeWorkButtonComponent } from './pages/home-work-button/home-work-button.component';
import { HomeWorkDropdownComponent } from './pages/home-work-dropdown/home-work-dropdown.component';
import { NgModelComponent } from './pages/ng-model/ng-model.component';
import { ConstructorNgoninitNgondestroyComponent } from './pages/constructor-ngoninit-ngondestroy/constructor-ngoninit-ngondestroy.component';
import { GetDataFromApiComponent } from './pages/get-data-from-api/get-data-from-api.component';
import { ServicesComponent } from './pages/services/services.component';
import {HomeWorkServicesComponent} from './pages/home-work-services/home-work-services.component';
import {ReactiveFormsComponent} from './pages/reactive-forms/reactive-forms.component';
import {HomeWorkReactiveFormsComponent} from './pages/home-work-reactive-forms/home-work-reactive-forms.component';
import {ObservableComponent} from './pages/observable/observable.component';
import {
  SubjectAndHotObservableComponent
} from './pages/subject-and-hot-observable/subject-and-hot-observable.component';
import {SignalsComponent} from './pages/signals/signals.component';
import {NgTemplateNgContainerComponent} from './pages/ng-template-ng-container/ng-template-ng-container.component';

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
  { path: 'homeservices', component: ServicesComponent },
  { path: 'homework-services', component: HomeWorkServicesComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'homework-reactive-forms', component: HomeWorkReactiveFormsComponent },
  { path: 'rxjs-observable', component: ObservableComponent },
  { path: 'subject-and-hot-observable', component: SubjectAndHotObservableComponent },
  { path: 'signals', component: SignalsComponent },
  { path: 'ng-template-ng-container', component: NgTemplateNgContainerComponent },
];
