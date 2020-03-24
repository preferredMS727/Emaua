import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[complexPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ComplexPasswordDirective, multi: true }]
})
export class ComplexPasswordDirective implements Validator {

  private validator: ValidatorFn = complexPasswordValidator();

  validate(control: AbstractControl): ValidationErrors | null {
    return this.validator(control);
  }
}

export function complexPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let password = control.get('password').value; // to get value in input tag
    let confirm = control.get('confirm').value; // to get value in input tag

    if (!((/\d/.test(password)) && (/[a-z]/.test(password)) && (password.length >= 8))) {
      control.get('password').setErrors({ complex: true });
    } else {
      return null
    }

  };
}

