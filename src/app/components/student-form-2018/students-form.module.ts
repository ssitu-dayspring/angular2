import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Store, StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from '../../store';
import { StudentFormEffects } from '../../store/student-form/student-form.effects';

import { StudentFormDataService } from '../../services/student-form-data';
// import { EditFormService } from '../../services/edit-form.service';

import { NgFormModule } from './ng-form/ng-form.module';

import { StudentsFormComponent } from './students-form.component';
import { HighSchoolStudentsListComponent } from './high-school/high-school-students-list.component';
import { HighSchoolStudentRowComponent } from './high-school/high-school-student-row.component';
import { BaseFormListComponent } from '../shared/base-form-list.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgFormModule,
        StoreModule.provideStore(reducer),
        EffectsModule.run(StudentFormEffects),
        RouterStoreModule.connectRouter(),
        StoreDevtoolsModule.instrumentOnlyWithExtension()
    ],
    declarations: [
        StudentsFormComponent,
        HighSchoolStudentsListComponent,
        HighSchoolStudentRowComponent,
        BaseFormListComponent
    ],
    providers: [
        // EditFormService,
        StudentFormDataService
    ],
    exports: [
        StudentsFormComponent,
        BaseFormListComponent
    ]
})

export class StudentsFormModule { }
