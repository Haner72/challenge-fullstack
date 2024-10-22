import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Robot } from './robot.model';

@Component({
  selector: 'app-robot',
  standalone: true,
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.css']
})
export class RobotComponent {
  posicao: Robot | null = null;

  constructor(private http: HttpClient) { 
    this.updatePosition();
  }

  updatePosition(): void {
    this.http.get<Robot>('/api/robot').subscribe(posicao => {
      this.posicao = posicao;
    });
  }

  move(): void {
    this.http.post<void>('/api/robot/m', {}).subscribe(() => {
      this.updatePosition();
    });
  }

  turnLeft(): void {
    this.http.post<void>('/api/robot/l', {}).subscribe(() => {
      this.updatePosition();
    });
  }

  girarDireita(): void {
    this.http.post<void>('/api/robot/r', {}).subscribe(() => {
      this.updatePosition();
    });
  }
}
