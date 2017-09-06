import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { EditFormService } from '../../../services/edit-form.service';

@Component({
    selector: 'person-list',
    template: require('./person-list.component.html'),
    styles: [require('./person-list.component.scss')]
})

export class PersonListComponent
{
    @Input() people: any[];
    @Input() reactiveForm: FormGroup;

    constructor(public editFormService: EditFormService) {}

    ngOnInit() {
        this.reactiveForm.addControl('fgPeople', new FormGroup({
            fcName:     new FormControl('Jerry Seinfeld', <any>Validators.required),
            fcCompany:  new FormControl('Yahoo', <any>Validators.required),
            fcPosition: new FormControl('Project Manager', <any>Validators.required)
        }))
    }
}