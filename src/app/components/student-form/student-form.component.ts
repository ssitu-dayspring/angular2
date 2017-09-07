import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../../store';

@Component({
    selector: 'student-form',
    template: require('./student-form.component.html'),
    styles: [require('./student-form.component.scss')]
})

export class StudentFormComponent
{
    form: FormGroup;

    constructor(private fb: FormBuilder,
                private store: Store<fromRoot.State>) {}

    ngOnInit() {
        this.form = this.fb.group({
            highSchool: this.fb.group({
                students: this.fb.array([])
            }),
            college: this.fb.group({
                students: this.fb.array([])
            }),
        });
    }

    submit() {
        console.log('submitted', this.form);
    }
}