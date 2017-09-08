import { Component, Input } from '@angular/core';
import { FormBuilder, AbstractControl, Validators } from '@angular/forms';

import { EditFormService } from '../../../services/edit-form.service';
import { AbstractBaseListComponent } from '../abstract-base-list.component';

@Component({
    selector: 'college-student-list',
    template: require('./college-student-list.component.html'),
    styles: [require('./college-student-list.component.scss')]
})

export class CollegeStudentListComponent extends AbstractBaseListComponent
{
    constructor(public fb: FormBuilder) {
        super();
    }

    add(): void {
        let form = this.fb.group({
            name: '',
            college: '',
            major: '',
            year: '',
            tuition: ''
        });

        const nameCtrl: AbstractControl = form.get('name');
        nameCtrl.setValidators([Validators.required, Validators.maxLength(255)]);
        nameCtrl.updateValueAndValidity();

        const collegeCtrl: AbstractControl = form.get('college');
        collegeCtrl.setValidators([Validators.required, Validators.maxLength(255)]);
        collegeCtrl.updateValueAndValidity();

        const majorCtrl: AbstractControl = form.get('major');
        majorCtrl.setValidators([Validators.required]);
        majorCtrl.updateValueAndValidity();

        const yearCtrl: AbstractControl = form.get('year');
        yearCtrl.setValidators([Validators.required]);
        yearCtrl.updateValueAndValidity();

        const tuitionCtrl: AbstractControl = form.get('tuition');
        tuitionCtrl.setValidators([Validators.required]);
        tuitionCtrl.updateValueAndValidity();

        this.getForm('students').push(form);
    }

    remove(idx: number): void {
        this.getForm('students').removeAt(idx);
    }
}