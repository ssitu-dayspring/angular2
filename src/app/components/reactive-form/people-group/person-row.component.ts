import { Component, Input } from '@angular/core';

import { EditFormService } from '../../../services/edit-form.service';

@Component({
    selector: 'person-row',
    template: require('./person-row.component.html'),
    styles: [require('./person-row.component.scss')]
})

export class PersonRowComponent
{
    @Input() person: any;

    constructor(public editFormService: EditFormService) {}

    getId() {
        return this.person.id;
    }

    getName() {
        return this.person.name;
    }

    setName(name: string) {
        this.editFormService.editPersonName(this.getId(), name);
    }

    getCompany() {
        return this.person.company;
    }

    getPosition() {
        return this.person.position;
    }
}