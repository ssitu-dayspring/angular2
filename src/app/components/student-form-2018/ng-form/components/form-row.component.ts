import { Component, Input } from '@angular/core';

@Component({
    selector: 'form-row',
    template: `
        <div class="form-group">
            <label *ngIf="label !== false"> {{ label }}</label>
            <ng-content select="[form-widget]"></ng-content>
            <ul class="help-block" *ngIf="errors.length > 0">
                <li *ngFor="let error of errors">{{ error }}</li>
            </ul>
        </div>
    `
})

export class FormRowComponent {
    @Input() label: string | false;
    @Input() inlineLabel: boolean = false;
    @Input() errors: string[] = [];
}