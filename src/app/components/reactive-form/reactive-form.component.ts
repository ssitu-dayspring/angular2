import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'reactive-form',
    template: require('./reactive-form.component.html'),
    //styles: [require('./reactive-form.component.scss')]
})

export class ReactiveFormComponent
{
    constructor(private fb: FormBuilder) {}


    ngOnInit() {

    }
}