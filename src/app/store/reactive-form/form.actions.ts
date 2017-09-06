import { Action } from '@ngrx/store';
import { type } from '../util';

export const ACTION = {
    SUBMIT:      type('[Form] Submit'),

    EDIT_CAR_MAKE:    type('[Form] Edit Car Make'),
    EDIT_CAR_MODEL:   type('[Form] Edit Car Model'),
    EDIT_CAR_YEAR:    type('[Form] Edit Car Year'),
    EDIT_CAR_MILEAGE: type('[Form] Edit Car Mileage'),

    EDIT_PERSON_NAME:     type('[Form] Edit Person Name'),
    EDIT_PERSON_COMPANY:  type('[Form] Edit Person Company'),
    EDIT_PERSON_POSITION: type('[Form] Edit Person Position')
};

abstract class EditStringFieldAction implements Action {
    type: any;
    payload: { id: number, value: string };

    constructor(public id: number, public value: string) {
        this.payload = {
            id: id,
            value: value
        }
    }
}

export class SubmitAction implements Action {
    type = ACTION.SUBMIT;
}

export class EditPersonNameAction extends EditStringFieldAction {
    type = ACTION.EDIT_PERSON_NAME;
}

export class EditPersonCompanyAction extends EditStringFieldAction {
    type = ACTION.EDIT_PERSON_COMPANY;
}

export class EditPersonPositionAction extends EditStringFieldAction {
    type = ACTION.EDIT_PERSON_POSITION;
}

export class EditCarMakeAction extends EditStringFieldAction {
    type = ACTION.EDIT_CAR_MAKE;
}

export class EditCarModelAction extends EditStringFieldAction {
    type = ACTION.EDIT_CAR_MODEL;
}

export class EditCarYearAction extends EditStringFieldAction {
    type = ACTION.EDIT_CAR_YEAR;
}

export class EditCarMileageAction extends EditStringFieldAction {
    type = ACTION.EDIT_CAR_MILEAGE;
}

export type Actions
    = SubmitAction
    | EditPersonNameAction
    | EditPersonCompanyAction
    | EditPersonPositionAction
    | EditCarMakeAction
    | EditCarModelAction
    | EditCarYearAction
    | EditCarMileageAction;
