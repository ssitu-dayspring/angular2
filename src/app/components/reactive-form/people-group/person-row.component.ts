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

    constructor(public editFormService: EditFormService) {}

    ngOnChanges() {
        if (!this.formGroup) {
            return;
        }
    }

    private hasError(name: string, error: string = undefined): boolean {
        if (!this.formGroup) return false;
        let tree = name.split('.');
        let o: any = this.formGroup;

        tree.forEach(key => {
            o = o.get(key);
        });

        if (error) {
            return o.hasError(error) && !o.pristine;
        } else {
            return o.errors && !o.pristine;
        }
    }

    delete() {
        this.onDelete.emit(this.idx);
    }
}