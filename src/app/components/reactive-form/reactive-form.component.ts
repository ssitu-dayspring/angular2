import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../../store';

@Component({
    selector: 'reactive-form',
    template: require('./reactive-form.component.html'),
    //styles: [require('./reactive-form.component.scss')]
})

export class ReactiveFormComponent
{
    constructor(private fb: FormBuilder,
                private store: Store<fromRoot.State>) {}

    ngOnInit() {}
}