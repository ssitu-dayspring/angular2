import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../../store';

import { PersonListComponent } from "./people-group/person-list.component";

@Component({
    selector: 'reactive-form',
    template: require('./reactive-form.component.html'),
    //styles: [require('./reactive-form.component.scss')]
})

export class ReactiveFormComponent
{
    people$: Observable<any[]>;
    cars$: Observable<any[]>;

    reactiveForm: FormGroup;
    //fgPeople: FormGroup;

    constructor(private fb: FormBuilder,
                private store: Store<fromRoot.State>) {}

    ngOnInit() {
        this.people$ = this.store.select(fromRoot.getPeople);
        this.cars$   = this.store.select(fromRoot.getCars);

        this.reactiveForm = this.fb.group({});
    }

    submit() {
        console.log('submitted', this.reactiveForm);
    }
}