import { Component, Input } from '@angular/core';
import { FormBuilder, AbstractControl, Validators } from '@angular/forms';

import { EditFormService } from '../../../services/edit-form.service';
import { AbstractBaseListComponent } from '../abstract-base-list.component';

import { Student, CollegeStudent } from '../../../models/student';

import { isaCurrency, isaNumber } from '../../../form-validators';

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

    ngOnChanges() {
        if (this.students && this.getForm('students').length == 0) {
            this.load();
        }
    }

    add(student: Student = null): void {
        let form = this.fb.group({
            name:    student ? (<CollegeStudent> student).name : '',
            school:  student ? (<CollegeStudent> student).school : '',
            major:   student ? (<CollegeStudent> student).major : '',
            year:    student ? (<CollegeStudent> student).year : '',
            tuition: student ? (<CollegeStudent> student).tuition : ''
        });

        const nameCtrl: AbstractControl = form.get('name');
        nameCtrl.setValidators([Validators.required, Validators.maxLength(255)]);
        nameCtrl.updateValueAndValidity();

        const schoolCtrl: AbstractControl = form.get('school');
        schoolCtrl.setValidators([Validators.required, Validators.maxLength(255)]);
        schoolCtrl.updateValueAndValidity();

        const majorCtrl: AbstractControl = form.get('major');
        majorCtrl.setValidators([Validators.required]);
        majorCtrl.updateValueAndValidity();

        const yearCtrl: AbstractControl = form.get('year');
        yearCtrl.setValidators([Validators.required]);
        yearCtrl.updateValueAndValidity();

        const tuitionCtrl: AbstractControl = form.get('tuition');
        tuitionCtrl.setValidators([Validators.required, isaCurrency]);
        tuitionCtrl.updateValueAndValidity();

        this.getForm('students').push(form);
    }

    remove(idx: number): void {
        this.getForm('students').removeAt(idx);
    }
}