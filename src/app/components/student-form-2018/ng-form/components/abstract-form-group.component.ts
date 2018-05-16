import { FormControl, FormGroup } from '@angular/forms';

declare type AssertError = {
    type: string, message: string
};

export declare type FieldsAssertErrors = {
    [fieldname: string]: AssertError[]
};

export abstract class AbstractFormGroupComponent {
    formGroup: FormGroup = null;
    fieldsAssertErrors: FieldsAssertErrors;

    abstract setFormGroup(): void;
    abstract setFieldsAssertErrors(): void;

    ngOnInit() {
        this.setFormGroup();
        this.setFieldsAssertErrors();
    }

    getErrors(fieldname: string): string[] {
        let errorTypes = this.getErrorTypesForFormControl(fieldname);

        return (this.fieldsAssertErrors[fieldname]).reduce((list: string[], assertError: AssertError) => {
            if (errorTypes.includes(assertError.type)) {
                list.push(assertError.message);
            }

            return list;
        }, []);
    }

    getAllErrors(): string[] {
        let allErrors: string[] = [];

        for (let fieldname in this.fieldsAssertErrors) {
            allErrors = allErrors.concat(this.getErrors(fieldname));
        }

        return allErrors;
    }

    protected getErrorTypesForFormControl(fieldname: string): string[] {
        let formCtrl = <FormControl> this.formGroup.controls[fieldname];

        if (formCtrl.errors) {
            return Object.keys(formCtrl.errors).map((errorType: any)=> {
                return errorType;
            })
        }

        return [];
    }
}
