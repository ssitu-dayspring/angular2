import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Student, HighSchoolStudent } from '../../../models/student';
import { AbstractFormGroupComponent } from '../ng-form/components/abstract-form-group.component';

@Component({
    selector: 'hs-student-row',
    template: require('./high-school-student-row.component.html')
})

export class HighSchoolStudentRowComponent extends AbstractFormGroupComponent {
    @Input() idx: number;
    @Input('formGroup') iFormGroup: FormGroup;

    setFormGroup(): void {
        this.formGroup = this.iFormGroup;
    }

    setFieldsAssertErrors(): void {
        this.fieldsAssertErrors = {
            name: [
                { type: 'required', message: 'Name field required' }
            ],
            school: [
                { type: 'required', message: 'School field required' }
            ],
            grade: [
                { type: 'required', message: 'Grade field required' }
            ],
            numAPClasses: [
                { type: 'required', message: '# AP Classes field required' }
            ]
        };
    }
}