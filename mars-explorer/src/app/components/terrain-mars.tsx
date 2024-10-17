import { Component } from '@angular/core';

@Component({
    selector: 'app-terrain-mars',
    template: `
        <div class="terrain-mars">
            <div *ngFor="let row of rows; let rowIndex = index" class="terrain-row">
                <div *ngFor="let col of cols; let colIndex = index" class="terrain-cell">
                    {{ rowIndex }}, {{ colIndex }}
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./terrain-mars.component.css'],
    standalone: true,
})
export class TerrainMars {
    rows = Array.from({ length: 5 });
    cols = Array.from({ length: 5 });
}
