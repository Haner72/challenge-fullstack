import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button-moviment',
    templateUrl: './button-moviment.component.html',
    styleUrls: ['./button-moviment.component.css'],
    standalone: true
})
export class ButtonMoviment {
    @Input() type!: string;

    handleClick() {
        console.log(`Botão ${this.type} pressionado!`);
    }
}

