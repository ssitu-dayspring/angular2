import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { EditFormService } from '../../../services/edit-form.service';

@Component({
    selector: 'car-list',
    template: require('./car-list.component.html'),
    styles: [require('./car-list.component.scss')]
})

export class CarListComponent
{
    @Input() cars: any[];
    @Input() reactiveForm: FormGroup;

    constructor(public editFormService: EditFormService) {}

    ngOnInit() {
        this.reactiveForm.addControl('fgCars', new FormGroup({
            fcMake:    new FormControl('Subaru', <any>Validators.required),
            fcModel:   new FormControl('Legacy', <any>Validators.required),
            fcYear:    new FormControl('2017', <any>Validators.required),
            fcMileage: new FormControl('35035', <any>Validators.required)
        }))
    }
}