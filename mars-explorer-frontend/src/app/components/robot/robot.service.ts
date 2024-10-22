import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Robot } from './robot.model';

@Injectable({
  providedIn: 'root',
})
export class RobotService {
  private apiUrl = '/api/robot/status';

  constructor(private http: HttpClient) {}

  getRobotPosition(): Observable<Robot> {
    return this.http.get<Robot>(this.apiUrl);
  }

  moveForward(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/m`, {});
  }

  turnLeft(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/l`, {});
  }

  turnRight(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/r`, {});
  }
}
