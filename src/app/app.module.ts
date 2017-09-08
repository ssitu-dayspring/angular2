import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { LOG_LOGGER_PROVIDERS } from 'angular2-logger/core';
import { Store, StoreModule } from '@ngrx/store';

import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { MainPagesModule } from './components/main-pages/main-pages.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { StudentFormComponent } from './components/student-form/student-form.component';
import { HighSchoolStudentListComponent } from './components/student-form/high-school/high-school-student-list.component';
import { HighSchoolStudentRowComponent } from './components/student-form/high-school/high-school-student-row.component';
import { CollegeStudentListComponent } from './components/student-form/college/college-student-list.component';
import { CollegeStudentRowComponent } from './components/student-form/college/college-student-row.component';
import { SummaryComponent } from './components/student-form/summary-group/summary.component';
import { BaseFormListComponent } from './components/shared/base-form-list.component';
import { BaseFormRowComponent } from './components/shared/base-form-row.component';
import { FormFieldComponent } from './components/shared/form-field.component';

import { reducer } from './store';
import { StudentFormEffects } from './store/student-form/student-form.effects';

import { EditFormService } from './services/edit-form.service';
import { StudentFormDataService } from './services/student-form-data';

@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.provideStore(reducer),
        EffectsModule.run(StudentFormEffects),
        RouterStoreModule.connectRouter(),
        StoreDevtoolsModule.instrumentOnlyWithExtension()
    ],
    declarations: [
        AppComponent,
        NavBarComponent,
        StudentFormComponent,
        HighSchoolStudentListComponent,
        HighSchoolStudentRowComponent,
        CollegeStudentListComponent,
        CollegeStudentRowComponent,
        SummaryComponent,
        BaseFormListComponent,
        BaseFormRowComponent,
        FormFieldComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        LOG_LOGGER_PROVIDERS,
        EditFormService,
        StudentFormDataService
    ]
})

export class AppModule { }
