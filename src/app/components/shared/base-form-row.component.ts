import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'form-row-old',
    template: `
        <div class="form-row">
            <div>
                <ng-content select=".form-row-body"></ng-content>
            
                <select style="width: 250px;" class="form-control" (change)="changeStudentType()" [(ngModel)]="studentType">
                    <option value disabled>-- Student Type --</option>
                    <option value="0">High School</option>
                    <option value="1">College</option>
                </select>
            </div>

            <span class="glyphicon glyphicon-minus-sign" (click)="remove()"></span>
        </div>
    `,
    styles: [require('./base-form-row.component.scss')]
})

export class BaseFormRowComponent
{
    @Output() onRemove: EventEmitter<boolean> = new EventEmitter();
    @Output() onChangeStudentType: EventEmitter<boolean> = new EventEmitter();

    studentType: number;

    remove() {
        this.onRemove.emit(true);
    }

    changeStudentType() {
        this.onChangeStudentType.emit(this.studentType == 1 ? true : false);
    }
}