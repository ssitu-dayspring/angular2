import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { EditFormService } from '../../../services/edit-form.service';
    import { AbstractFormArrayManager } from '../abstract-form-array-manager';

@Component({
    selector: 'college-student-list',
    template: require('./college-student-list.component.html'),
    styles: [require('./college-student-list.component.scss')]
})

export class CollegeStudentListComponent extends AbstractFormArrayManager
{
    constructor(public fb: FormBuilder) {
        super();
    }

    add(): void {
        let form = this.fb.group({
            name: '',
            college: '',
            major: '',
            year: ''
        });

        this.getForm('students').push(form);
    }

    remove(idx: number): void {
        this.getForm('students').removeAt(idx);
    }
}