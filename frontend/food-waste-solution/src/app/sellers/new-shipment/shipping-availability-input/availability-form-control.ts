import { FormGroup, FormArray, FormControl, Validators, ValidatorFn, AbstractControlOptions, AsyncValidatorFn } from '@angular/forms';

export class ShippingAvailabilityFormGroup extends FormGroup {
    constructor(initialLocation = '') {
        super({
            location: new FormControl(initialLocation, Validators.required),
            dates: new FormArray([], Validators.required)
        });
    }
}

export class ShippingAvailabilityFormArray extends FormArray {
    constructor(
        validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions,
        asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]
    ) {
        super([], validatorOrOpts, asyncValidator);
    }

    addControl() {
        super.push(new ShippingAvailabilityFormGroup());
    }
}
