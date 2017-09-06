import { Component } from '@angular/core';

import { EditFormService } from '../../../services/edit-form.service';

@Component({
    selector: 'person-row',
    template: require('./person-row.component.html'),
    styles: [require('./person-row.component.scss')]
})

export class PersonRowComponent
{
    constructor(public editFormService: EditFormService) {}

    getId() {
        return 0;
    }
    
    setName(name: string) {
        this.editFormService.editPersonName(this.getId(), name);
    }
}