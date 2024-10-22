import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terrain-mars',
  templateUrl: './terrain-mars.component.html',
  styleUrls: ['./terrain-mars.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TerrainMars {
  rows = Array(5).fill(0);
  cols = Array(5).fill(0);
  robotPosition = { x: 0, y: 0, direction: 'N'};

  updateRobotPosition(position: { x: number, y: number, direction: string }) {
    this.robotPosition = position
  }
}
