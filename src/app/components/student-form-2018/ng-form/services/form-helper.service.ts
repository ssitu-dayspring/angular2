import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class FormHelperService {
    validate(formGroup: (FormGroup | FormArray)) {
        Object.keys(formGroup.controls).forEach((field) => {
            let control: AbstractControl = formGroup.get(field);

            if (control instanceof FormControl) {
                control.markAsDirty({onlySelf: true});
            } else if (control instanceof FormGroup || control instanceof FormArray) {
                this.validate(<FormGroup> control);
            }
        });
    }

    getFormArray(formGroup: FormGroup, name: string): FormArray {
        return <FormArray> formGroup.controls[name];
    }

    getFormControl(formGroup: FormGroup, name: string): FormControl {
        return <FormControl> formGroup.controls[name];
    }
}