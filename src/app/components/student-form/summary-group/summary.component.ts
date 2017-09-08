import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'summary',
    template: require('./summary.component.html'),
    styles: [require('./summary.component.scss')]
})

export class SummaryComponent
{
    @Input() isSubmittable: boolean;

    submit() {}
}