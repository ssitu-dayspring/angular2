import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'college-student-row',
    template: require('./college-student-row.component.html'),
    styles: [require('./college-student-row.component.scss')]
})

export class CollegeStudentRowComponent
{
    @Input() idx: number;
    @Input('student') formGroup: FormGroup;
    @Output() onRemove: EventEmitter<number> = new EventEmitter();

    errList: any = [
        { type: 'required',  msg: 'Name is required' },
        { type: 'maxlength', msg: 'Exceeded maximum of 255 characters' }
    ];

    constructor() {}

    remove() {
        this.onRemove.emit(this.idx);
    }
}
