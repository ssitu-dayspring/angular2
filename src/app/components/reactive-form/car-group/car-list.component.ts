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
    @Input('formGroup') formCars: FormGroup;

    constructor(public editFormService: EditFormService) {}

    ngOnInit() {}
}