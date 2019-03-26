import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormComponent} from './form/form.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormRoutingModule} from './form-routing.module';

@NgModule({
    declarations: [
        FormComponent
    ],
    imports: [
        SharedModule,
        FormRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class FormModule {
}
