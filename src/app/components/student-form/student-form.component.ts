import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Student } from '../../models/student';

import * as fromRoot from '../../store';
import * as students from '../../store/student-form/student-form.actions';

import { StudentFormDataService } from '../../services/student-form-data';
import { Students } from '../../models/student';
import {HighSchoolStudent} from "../../models/student";
import {CollegeStudent} from "../../models/student";

@Component({
    selector: 'student-form',
    template: require('./student-form.component.html'),
    styles: [require('./student-form.component.scss')]
})

export class StudentFormComponent
{
    form: FormGroup;
    students$: Observable<Students>;

    constructor(private fb: FormBuilder,
                private store: Store<fromRoot.State>,
                private studentFormData: StudentFormDataService) {}

    ngOnInit() {
        this.form = this.fb.group({
            highSchool: this.fb.group({
                students: this.fb.array([])
            }),
            college: this.fb.group({
                students: this.fb.array([])
            }),
        });

        this.students$ = this.studentFormData.getStudents();
    }

    submit() {
        console.log('Submit', this.form);

        let formValues = this.form.value;

        let highSchoolStudents: HighSchoolStudent[] = formValues.highSchool.students;
        let collegeStudents: CollegeStudent[] = formValues.college.students;
        let isFormValid = this.form.valid;

        //Object.keys((<FormGroup>this.form.get('highSchool')).controls).forEach(field => {
        //    const control = this.form.get(field);
        //    control.markAsDirty({onlySelf: true});
        //});

        console.log(isFormValid, highSchoolStudents, collegeStudents);

        this.store.dispatch(new students.SaveAction({
            highSchool: highSchoolStudents,
            college: collegeStudents
        }));
    }
}