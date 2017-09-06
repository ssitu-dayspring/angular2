import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { State } from '../store/reactive-form/form.reducer';
import * as editFormAction from '../store/reactive-form/form.actions';
import * as fromRoot from '../store';

@Injectable()
export class EditFormService {
    formState$: Observable<State>;

    constructor(private store:Store<fromRoot.State>) {
        this.formState$ = this.store.select(fromRoot.getFormState);
    }

    editPersonName(id: number, name: string) {
        this.store.dispatch(new editFormAction.EditPersonNameAction(id, name));
    }

    editPersonCompany(id: number, company: string) {
        this.store.dispatch(new editFormAction.EditPersonCompanyAction(id, company));
    }

    editPersonPosition(id: number, position: string) {
        this.store.dispatch(new editFormAction.EditPersonPositionAction(id, position));
    }

    editCarMake(id: number, make: string) {
        this.store.dispatch(new editFormAction.EditCarMakeAction(id, make));
    }

    editCarModel(id: number, model: string) {
        this.store.dispatch(new editFormAction.EditCarModelAction(id, model));
    }

    editCarYear(id: number, year: string) {
        this.store.dispatch(new editFormAction.EditCarYearAction(id, year));
    }

    editCarMileage(id: number, mileage: string) {
        this.store.dispatch(new editFormAction.EditCarMileageAction(id, mileage));
    }

    submit() {
        this.store.dispatch(new editFormAction.SubmitAction());
    }
}
