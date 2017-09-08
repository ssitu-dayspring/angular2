import { Action } from '@ngrx/store';
import { type } from '../util';

import { Students } from '../../models/student';

export const ACTION = {
    LOAD: type('[Student Form] Load students'),
    SAVE: type('[Student Form] Save new students')
};

export class LoadAction implements Action {
    type = ACTION.LOAD;

    constructor() { };
}

export class SaveAction implements Action {
    type = ACTION.SAVE;

    constructor(public payload: Students) { };
}

export type Action
    = LoadAction
    | SaveAction;
