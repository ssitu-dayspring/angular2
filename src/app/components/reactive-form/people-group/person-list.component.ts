import { Component, Input } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { EditFormService } from '../../../services/edit-form.service';

@Component({
    selector: 'person-list',
    template: require('./person-list.component.html'),
    styles: [require('./person-list.component.scss')]
})

export class PersonListComponent
{
    @Input() people: any[];
    @Input() formGroup: FormGroup;

    constructor(public editFormService: EditFormService,
                public fb: FormBuilder) {}

    get peopleForm() {
        return <FormArray> this.formGroup.controls['people'];
    }

    add() {
        let form = this.fb.group({
            name: '',
            company: '',
            position: ''
        });

        const nameCtrl: AbstractControl = form.get('name');
        nameCtrl.setValidators([Validators.required, Validators.maxLength(255)]);
        nameCtrl.updateValueAndValidity();

        const companyCtrl: AbstractControl = form.get('company');
        companyCtrl.setValidators([Validators.required, Validators.maxLength(255)]);
        companyCtrl.updateValueAndValidity();

        const positionCtrl: AbstractControl = form.get('position');
        positionCtrl.setValidators([Validators.required, Validators.maxLength(255)]);
        positionCtrl.updateValueAndValidity();

        this.peopleForm.push(form);
    }
}