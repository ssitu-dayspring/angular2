import { Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

export abstract class AbstractFormArrayManager
{
    @Input() formGroup: FormGroup;

    getForm(controlName: string) {
        return <FormArray> this.formGroup.controls[controlName];
    }

    abstract add(): void;
    abstract remove(idx: number): void;
}