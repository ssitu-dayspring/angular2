import { NgModule } from '@angular/core';
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

import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { PersonListComponent } from './components/reactive-form/people-group/person-list.component';
import { PersonRowComponent } from './components/reactive-form/people-group/person-row.component';
import { CarListComponent } from './components/reactive-form/car-group/car-list.component';
import { CarRowComponent } from './components/reactive-form/car-group/car-row.component';
import { SummaryComponent } from './components/reactive-form/summary-group/summary.component';
import { FormRowComponent } from './components/shared/form-row.component';

import { reducer } from './store';

import { EditFormService } from './services/edit-form.service';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.provideStore(reducer),
        RouterStoreModule.connectRouter(),
        StoreDevtoolsModule.instrumentOnlyWithExtension()
    ],
    declarations: [
        AppComponent,
        NavBarComponent,
        ReactiveFormComponent,
        PersonListComponent,
        PersonRowComponent,
        CarListComponent,
        CarRowComponent,
        SummaryComponent,
        FormRowComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        LOG_LOGGER_PROVIDERS,
        EditFormService
    ]
})

export class AppModule { }
