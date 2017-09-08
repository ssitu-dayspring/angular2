import { Component, Input } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { AbstractBaseListComponent } from '../abstract-base-list.component';

import { Student, HighSchoolStudent } from '../../../models/student';

@Component({
    selector: 'high-school-student-list',
    template: require('./high-school-student-list.component.html'),
    styles: [require('./high-school-student-list.component.scss')]
})

export class HighSchoolStudentListComponent extends AbstractBaseListComponent
{
    constructor(public fb: FormBuilder) {
        super();
    }

    ngOnChanges() {
        if (this.students && this.getForm('students').length == 0) {
            this.load();
        }
    }

    add(student: Student = null): void {
        let form = this.fb.group({
            name:         student ? (<HighSchoolStudent> student).name : '',
            school:       student ? (<HighSchoolStudent> student).school : '',
            grade:        student ? (<HighSchoolStudent> student).grade : '',
            numAPClasses: student ? (<HighSchoolStudent> student).numAPClasses : ''
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