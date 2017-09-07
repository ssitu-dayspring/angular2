import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'form-row',
    template: `
        <div class="form-row">
            <div>
                <ng-content select=".form-row-body"></ng-content>
            </div>

            <span class="glyphicon glyphicon-minus-sign" (click)="remove()"></span>
        </div>
    `,
    styles: [require('./base-form-row.component.scss')]
})

export class BaseFormRowComponent
{
    @Output() onRemove: EventEmitter<boolean> = new EventEmitter();

    remove() {
        this.onRemove.emit(true);
    }
}