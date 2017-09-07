import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AbstractBaseRowComponent } from '../abstract-base-row.component';

@Component({
    selector: 'college-student-row',
    template: require('./college-student-row.component.html'),
    styles: [require('./college-student-row.component.scss')]
})

export class CollegeStudentRowComponent extends AbstractBaseRowComponent
{
    @Input('student') formGroup: FormGroup;

    validations: any = {
        name: [
            { type: 'required',  msg: 'Name is required' },
            { type: 'maxlength', msg: 'Exceeded maximum of 255 characters' }
        ],
        college: [
            { type: 'required',  msg: 'School is required' },
            { type: 'maxlength', msg: 'Exceeded maximum of 255 characters' }
        ],
        year: [
            { type: 'required',  msg: 'Year is required' }
        ],
        major: [
            { type: 'required',  msg: 'Major is required' },
            { type: 'maxlength', msg: 'Exceeded maximum of 255 characters' }
        ]
    };
}
