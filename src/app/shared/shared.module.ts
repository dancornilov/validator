import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {ValidatorComponent} from './validator/validator.component';

@NgModule({
    declarations: [
        ValidatorComponent
    ],
    imports: [
        TranslateModule,
        CommonModule
    ],
    exports: [
        TranslateModule,
        ValidatorComponent
    ]
})
export class SharedModule {
}
