import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-validator',
    templateUrl: './validator.component.html',
    styleUrls: ['./validator.component.scss']
})
export class ValidatorComponent implements OnInit {
    @Input() public control: FormControl;
    @Input() public customName: string;
    @Input() public customValidation: { name: string, text: string };
    public name: string;

    constructor(private translateService: TranslateService) {
    }

    public ngOnInit(): void {
        const fieldName = this.customName ? this.customName : this.getControlName();

        this.name = this.translateService.instant(`fields.${fieldName}`);
    }

    /**
     * Check if the validator has a custom validation message
     *
     * @param errors
     *
     * @return string
     */
    public message(errors: ValidationErrors | null): string {
        const properties = Object.keys(errors);
        let customMessage: boolean;

        if (this.customValidation) {
            customMessage = (properties.indexOf(this.customValidation.name) > -1);
        }

        return customMessage ? this.customValidation.text : `validators.${properties[0]}`;
    }

    /**
     * Extract control name from formGroup
     *
     * @return string
     */
    public getControlName(): string {
        let controlName = null;
        const parent = this.control['parent'];

        if (parent instanceof FormGroup) {
            for (const name in parent.controls) {
                if (this.control === parent.controls[name]) {
                    controlName = name;
                }
            }
        }

        return controlName;
    }
}
