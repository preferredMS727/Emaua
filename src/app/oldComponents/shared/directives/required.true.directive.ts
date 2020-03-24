import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[requiredTrue]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RequiredTrueDirective, multi: true }]
})
export class RequiredTrueDirective implements Validator {

  private validator: ValidatorFn = requiredTrueValidator();

  validate(control: AbstractControl): ValidationErrors | null {
    return this.validator(control);
  }

}

export function requiredTrueValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value) {
      return null;
    } else {
      return { requiredTrue: { expected: true, actual: control.value } };
    }
  };
}
