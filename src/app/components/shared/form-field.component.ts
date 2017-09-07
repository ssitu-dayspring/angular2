import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'form-field',
    template: `
        <div class="form-group" [ngClass]="{'has-error': hasError(ctrlName)}">
            <ng-content class="" select=".form-label"></ng-content>
            <ng-content select=".form-widget"></ng-content>

            <div *ngFor="let validation of validations">
                <label *ngIf="hasError(ctrlName, validation.type)"
                     class="error"
                     role="alert">{{ validation.msg }}</label>
            </div>
        </div>
    `
})

export class FormFieldComponent
{
    @Input() formGroup: FormGroup;
    @Input() ctrlName: string;
    @Input() validations: string;

    private hasError(name: string, error: string = undefined): boolean {
        if (!this.formGroup) return false;
        let tree = name.split('.');
        let o: any = this.formGroup;

        tree.forEach(key => {
            o = o.get(key);
        });

        if (error) {
            return o.hasError(error) && !o.pristine;
        } else {
            return o.errors && !o.pristine;
        }
    }
}