import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormHelperService } from './services/form-helper.service';
import { FormRowComponent } from './components/form-row.component';
import { FormGroupComponent } from './components/form-group.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        FormRowComponent,
        FormGroupComponent
    ],
    providers: [
        FormHelperService
    ],
    exports: [
        FormRowComponent,
        FormGroupComponent
    ]
})

export class NgFormModule { }
