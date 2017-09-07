import { Component, Input } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { AbstractBaseListComponent } from '../abstract-base-list.component';

@Component({
    selector: 'high-school-student-list',
    template: require('./high-school-student-list.component.html'),
    styles: [require('./high-school-student-list.component.scss')]
})

export class HighSchoolStudentListComponent extends AbstractBaseListComponent
{
    @Input() formGroup: FormGroup;

    constructor(public fb: FormBuilder) {
        super();
    }

    add(): void {
        let form = this.fb.group({
            name: '',
            school: '',
            grade: '',
            numAPClasses: ''
        });

        const nameCtrl: AbstractControl = form.get('name');
        nameCtrl.setValidators([Validators.required, Validators.maxLength(255)]);
        nameCtrl.updateValueAndValidity();

        const schoolCtrl: AbstractControl = form.get('school');
        schoolCtrl.setValidators([Validators.required, Validators.maxLength(255)]);
        schoolCtrl.updateValueAndValidity();

        const gradeCtrl: AbstractControl = form.get('grade');
        gradeCtrl.setValidators([Validators.required]);
        gradeCtrl.updateValueAndValidity();

        const numAPClassesCtrl: AbstractControl = form.get('numAPClasses');
        numAPClassesCtrl.setValidators([Validators.required]);
        numAPClassesCtrl.updateValueAndValidity();

        this.getForm('students').push(form);
    }

    remove(idx: number): void {
        this.getForm('students').removeAt(idx);
    }
}