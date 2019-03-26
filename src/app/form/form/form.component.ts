import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    public form: FormGroup;
    public ageValidation: { name: string, text: string };

    constructor(private formBuilder: FormBuilder) {
        this.createForm();
    }

    public ngOnInit(): void {
        this.ageValidation = {name: 'min', text: 'validators.age-validation'};
    }

    /**
     * Generate fields & validations
     */
    private createForm(): void {
        this.form = this.formBuilder.group({
            name: [null, Validators.required],
            project_manager_name: [null, Validators.required],
            age: [null, Validators.compose([Validators.required, Validators.min(18)])],
            salary: [null, Validators.compose([Validators.required, Validators.min(1000)])],
            street_name: [null, Validators.compose([Validators.required, Validators.minLength(10)])]
        });
    }
}
