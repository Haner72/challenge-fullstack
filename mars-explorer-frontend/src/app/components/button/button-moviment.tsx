import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TerrainMars } from '../terrain/terrain-mars';

@Component({
  selector: 'app-button-moviment',
  templateUrl: './button-moviment.component.html',
  styleUrls: ['./button-moviment.component.css'],
  standalone: true
})

export class ButtonMoviment {
  @Input() type!: string;
  @Output() positionUpdated = new EventEmitter<{ x: number; y: number; direction: string }>();

  handleClick() {
    const endpoint = `http://localhost:8080/api/robot/${this.type.toLowerCase()}`;
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Response', response);
      if (!response.ok) {
        throw new Error('O Network nao ta bem');
      }
      return response.json();
    })
    .then(robot => {
      console.log(`Botão ${this.type} pressionado!`, robot);
      
      this.positionUpdated.emit({
        x: robot.x,
        y: robot.y,
        direction: robot.direction
      });
    })
    .catch(error => {
      console.error('Deu erro denovo affe', error);
    });
  }
}