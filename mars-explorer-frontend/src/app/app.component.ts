import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonMoviment } from './components/button/button-moviment';
import { TerrainMars } from './components/terrain/terrain-mars';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonMoviment, TerrainMars, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})

export class AppComponent {
  title = 'mars-explorer';
  robotPosition = { x: 0, y: 0, direction: 'N'};


updateRobotPosition(position : { x: number, y: number, direction: string}) {
  this.robotPosition = position;
  }
}