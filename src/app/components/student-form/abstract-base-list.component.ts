import { Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

import { Student } from '../../models/student';

export abstract class AbstractBaseListComponent
{
    @Input() formGroup: FormGroup;
    @Input() students: Student[];

    getForm(controlName: string) {
        return <FormArray> this.formGroup.controls[controlName];
    }

    abstract add(student: Student): void;
    abstract remove(idx: number): void;

    load(): void {
        this.students.forEach((student: Student) => {
            this.add(student);
        });
    }
}