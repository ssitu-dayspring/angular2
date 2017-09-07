import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'form-list',
    template: `
        <div>
            <span class="header">{{ header }}</span>

            <div class="form-list-container">
                <ng-content selector=".form-list"></ng-content>

                <button type="button" class="btn btn-primary" (click)="add()">
                    <span class="glyphicon glyphicon-plus"></span> Add
                </button>
            </div>
        </div>
    `,
    styles: [require('./base-form-list.component.scss')]
})

export class BaseFormListComponent
{
    @Input() header: string;
    @Output() onAdd: EventEmitter<boolean> = new EventEmitter();

    add() {
        this.onAdd.emit(true);
    }
}