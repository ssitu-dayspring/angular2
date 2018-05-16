import { Component, Input } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { Student, HighSchoolStudent } from '../../../models/student';

@Component({
    selector: 'hs-students-list',
    template: `
        <form-list [header]="'High School Students'"
                   (onAdd)="add()">
            <hs-student-row
                *ngFor="let student of getFormArray().controls; let i=index"
                [idx]="i"
                [formGroup]="student"></hs-student-row>
        </form-list>
    `
})

export class HighSchoolStudentsListComponent {
    @Input() formGroup: FormGroup;
    @Input() students: Student[];

    constructor(private fb: FormBuilder) {}

    ngOnChanges() {
        if (this.students) {
            this.loadExistingStudents();
        }
    }

    loadExistingStudents(): void {
        this.students.forEach((student: Student) => {
            this.add(student);
        });
    }

    add(student: Student = null): void {
        let formGroup = this.fb.group({
            name: student ? (<HighSchoolStudent> student).name : '',
            school: student ? (<HighSchoolStudent> student).school : '',
            grade: student ? (<HighSchoolStudent> student).grade : '',
            numAPClasses: student ? (<HighSchoolStudent> student).numAPClasses : ''
        });

        const nameCtrl: AbstractControl = formGroup.get('name');
        nameCtrl.setValidators([
            Validators.required,
            Validators.maxLength(255)
        ]);
        nameCtrl.updateValueAndValidity();

        const schoolCtrl: AbstractControl = formGroup.get('school');
        schoolCtrl.setValidators([
            Validators.required,
            Validators.maxLength(255)
        ]);
        schoolCtrl.updateValueAndValidity();

        const gradeCtrl: AbstractControl = formGroup.get('grade');
        gradeCtrl.setValidators([
            Validators.required
        ]);
        gradeCtrl.updateValueAndValidity();

        const numAPClassesCtrl: AbstractControl = formGroup.get('numAPClasses');
        numAPClassesCtrl.setValidators([
            Validators.required
        ]);
        numAPClassesCtrl.updateValueAndValidity();

        this.getFormArray().push(formGroup);
    }

    getFormArray(): FormArray {
        return <FormArray> this.formGroup.controls['students'];
    }

    remove(idx: number) {
        (<FormArray> this.formGroup.get('students')).removeAt(idx);
    }
}