import { Component, Input } from '@angular/core';

import { EditFormService } from '../../../services/edit-form.service';

@Component({
    selector: 'person-list',
    template: require('./person-list.component.html'),
    styles: [require('./person-list.component.scss')]
})

export class PersonListComponent
{
    @Input() people: any[];

    constructor(public editFormService: EditFormService) {}
}