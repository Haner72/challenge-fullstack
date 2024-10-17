import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonMoviment } from './components/button-moviment';
import { TerrainMars } from './components/terrain-mars';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonMoviment, TerrainMars],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
})
export class AppComponent {
  title = 'mars-explorer';
}