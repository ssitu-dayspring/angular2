import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Student } from '../../models/student';

import * as fromRoot from '../../store';
import * as students from '../../store/student-form/student-form.actions';

import { StudentFormDataService } from '../../services/student-form-data';
import { Students, HighSchoolStudent, CollegeStudent } from '../../models/student';

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

    isSubmittable(): boolean {
        return (<FormArray> this.form.get('highSchool').get('students')).length > 0 ||
            (<FormArray> this.form.get('college').get('students')).length > 0;
    }

    submit() {
        let formValues = this.form.value;

        let highSchoolStudents: HighSchoolStudent[] = formValues.highSchool.students;
        let collegeStudents: CollegeStudent[] = formValues.college.students;
        let isFormValid = this.form.valid;

        this.validateAllFields(this.form);

        if (isFormValid) {
            this.store.dispatch(new students.SaveAction({
                highSchool: highSchoolStudents,
                college: collegeStudents
            }));
        } else {
            console.log('Errors');
        }
    }

    changeStudentType(isCollegeStudent: boolean) {
        console.log(isCollegeStudent);

        console.log((<FormArray> this.form.get('highSchool').get('students')).at(0));
    }

    /**
     * @param formGroup
     *
     * Marking forms as dirty will trigger validations in the child components
     *
     */
    private validateAllFields(formGroup: (FormGroup | FormArray)) {
        Object.keys(formGroup.controls).forEach((field) => {
            let control: AbstractControl = formGroup.get(field);

            if (control instanceof FormControl) {
                control.markAsDirty({onlySelf: true});
            } else if (control instanceof FormGroup || control instanceof FormArray) {
                this.validateAllFields(<FormGroup> control);
            }
        });
    }
}