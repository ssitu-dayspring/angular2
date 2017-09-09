import { AbstractControl } from '@angular/forms';

export function isaCurrency(control: AbstractControl) {
    let currency = control.value.toString();

    return currency == '' || currency.match(/^[-]?\d{1,8}(|\.\d{1,2})$/) !== null
        ? undefined : { isaCurrency: {valid: false} };
}

export function isaNumber(c: AbstractControl) {
    return (!c.value || /^\d+(\.\d*)?$/.test(c.value))
        ? undefined : { isaNumber: {valid: false} };
}
