import { createSelector } from 'reselect';
import * as form from './form.actions';

export interface Person { id: number; name: string; company: string; position: string; }
export interface Car { id: number; make: string; model: string; year: string; mileage: string; }

export interface State {
    people: Person[];
    cars: Car[];
}

const initialState: State = {
    people: [
        { id: 1, name: 'Jerry Seinfeld', company: 'Yahoo', position: 'General Manager' }
    ],
    cars: [
        { id: 2, make: 'Subaru', model: 'Legacy', year: '2017', mileage: '25453' }
    ]
};

export function reducer(state = initialState, action: form.Actions): State {
    switch (action.type) {
        case form.ACTION.SUBMIT:
            return state;

        case form.ACTION.EDIT_PERSON_NAME:
            return editField(state, 'people', 'name', (<form.EditPersonNameAction>action).payload);
        case form.ACTION.EDIT_PERSON_COMPANY:
            return editField(state, 'people', 'company', (<form.EditPersonCompanyAction>action).payload);
        case form.ACTION.EDIT_PERSON_POSITION:
            return editField(state, 'people', 'position', (<form.EditPersonPositionAction>action).payload);

        case form.ACTION.EDIT_CAR_MAKE:
            return editField(state, 'cars', 'make', (<form.EditCarMakeAction>action).payload);
        case form.ACTION.EDIT_CAR_MODEL:
            return editField(state, 'cars', 'model', (<form.EditCarModelAction>action).payload);
        case form.ACTION.EDIT_CAR_YEAR:
            return editField(state, 'cars', 'year', (<form.EditCarYearAction>action).payload);
        case form.ACTION.EDIT_CAR_MILEAGE:
            return editField(state, 'cars', 'mileage', (<form.EditCarMileageAction>action).payload);

        default:
            return state;
    }
}

function editField(state: State, stateSlice: string, fieldName: string, payload: {id: number, value: string}) {
    let id: number = payload.id,
        value: string = payload.value;
    let newStateSlice = state[stateSlice].map((data: any) => {
        if (+(data.id) === +id) {
            return Object.assign({}, data, {
                [fieldName]: value
            });
        }

        return data;
    });

    return Object.assign({}, state, {
        [stateSlice]: newStateSlice
    });
}

export const getPeople = (state: State) => state.people;
export const getCars = (state: State) => state.cars;