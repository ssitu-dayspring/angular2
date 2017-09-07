import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'form-row',
    template: `
        <div class="form-group" [ngClass]="{'has-error': hasError(ctrlName)}">
            <label>{{ label }}</label>
            <ng-content select=".form-row"></ng-content>

            <div *ngFor="let err of errList">
                <label *ngIf="hasError(ctrlName, err.type)"
                     class="error"
                     role="alert">{{ err.msg }}</label>
            </div>
        </div>
    `
})

export class FormRowComponent
{
    @Input() formGroup: FormGroup;
    @Input() label: string;
    @Input() ctrlName: string;
    @Input() errList: string;

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