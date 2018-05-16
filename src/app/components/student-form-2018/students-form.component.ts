import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { Students } from '../../models/student';
import { StudentFormDataService } from '../../services/student-form-data';
import { FormHelperService } from './ng-form/services/form-helper.service';

@Component({
    selector: 'students-form',
    template: require('./students-form.component.html')
})

export class StudentsFormComponent
{
    formRoot: FormGroup;
    students$: Observable<Students>;
    
    constructor(private fb: FormBuilder,
                private studentFormData: StudentFormDataService,
                private formHelperService: FormHelperService) {}
    
    ngOnInit() {
        this.formRoot = this.fb.group({
            highSchool: this.fb.group({
                students: this.fb.array([])
            }),
            college: this.fb.group({
                students: this.fb.array([])
            }),
        });
        
        this.students$ = this.studentFormData.getStudents();
    }
    
    onSubmit() {
        this.formHelperService.validate(this.formRoot);

        console.log(this.formRoot);
    }
}