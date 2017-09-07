import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, AbstractControl, Validators } from '@angular/forms';

@Component({
    selector: 'high-school-student-row',
    template: require('./high-school-student-row.component.html'),
    styles: [require('./high-school-student-row.component.scss')]
})

export class HighSchoolStudentRowComponent
{
    @Input() idx: number;
    @Input('student') formGroup: FormGroup;
    @Output() onRemove: EventEmitter<number> = new EventEmitter();

    validations: any = {
        name: [
            { type: 'required',  msg: 'Name is required' },
            { type: 'maxlength', msg: 'Exceeded maximum of 255 characters' }
        ],
        school: [
            { type: 'required',  msg: 'School is required' },
            { type: 'maxlength', msg: 'Exceeded maximum of 255 characters' }
        ],
        grade: [
            { type: 'required',  msg: 'Grade is required' }
        ],
        numAPClasses: [
            { type: 'required',  msg: '# AP Classes is required' }
        ]
    };

    constructor() {}

    remove() {
        this.onRemove.emit(this.idx);
    }
}