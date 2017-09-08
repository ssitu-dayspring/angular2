import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import * as fromRoot from '../../store';
import * as studentForm from './student-form.actions';

import { Students } from '../../models/student';

import { StudentFormDataService } from '../../services/student-form-data';

@Injectable()
export class StudentFormEffects {

    @Effect({dispatch: false})
    load$: Observable<Action> = this.actions$
        .ofType(studentForm.ACTION.LOAD)
        .switchMap((res: any) => {
            let highSchoolStudents = res['highSchool'];
            let collegeStudents = res['college'];

            return Observable.empty();
        });

    @Effect({dispatch: false})
    submit$: Observable<Action> = this.actions$
        .ofType(studentForm.ACTION.SAVE)
        .switchMap((action: studentForm.SaveAction) => {
            let students: Students = action.payload;
            this.studentFormData.saveStudents(students);

            //window.location.href = 'http://localhost:3000';

            return Observable.empty();
        });

    constructor(private actions$: Actions,
                private studentFormData: StudentFormDataService) { }
}