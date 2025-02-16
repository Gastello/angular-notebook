import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ModulesModule } from './pages/02-modules/modules.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ModulesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular Notebook';
  isNavVisible = true;

  toggleNav(){
    this.isNavVisible = !this.isNavVisible;
  }
}
