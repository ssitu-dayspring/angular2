import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, AbstractControl, Validators } from '@angular/forms';

import { EditFormService } from '../../../services/edit-form.service';

@Component({
    selector: 'person-row',
    template: require('./person-row.component.html'),
    styles: [require('./person-row.component.scss')]
})

export class PersonRowComponent
{
    @Input() idx: number;
    @Input('person') formGroup: FormGroup;
    @Output() onDelete: EventEmitter<number> = new EventEmitter();

    errList: any = [
        { type: 'required',  msg: 'Name is required' },
        { type: 'maxlength', msg: 'Exceeded maximum of 255 characters' }
    ];

    constructor(public editFormService: EditFormService) {}

    ngOnChanges() {
        if (!this.formGroup) {
            return;
        }
    }

    delete() {
        this.onDelete.emit(this.idx);
    }
}