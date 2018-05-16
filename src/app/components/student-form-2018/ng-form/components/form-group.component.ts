import { Component, Input } from '@angular/core';

@Component({
    selector: 'form-group',
    template: `
        <label *ngIf="label !== false"> {{ label }}</label>
        <ng-content></ng-content>
        <ul class="help-block" *ngIf="errors.length > 0">
            <li *ngFor="let error of errors">{{ error }}</li>
        </ul>
    `
})

export class FormGroupComponent {
    @Input() label: string | false;
    @Input() errors: string[] = [];
}