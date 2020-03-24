import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[matchPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MatchPasswordDirective, multi: true }]
})
export class MatchPasswordDirective implements Validator {

  private validator: ValidatorFn = matchPasswordValidator();

  validate(control: AbstractControl): ValidationErrors | null {
    return this.validator(control);
  }

}

export function matchPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let password = control.get('password').value; // to get value in input tag
    let confirm = control.get('confirm').value; // to get value in input tag
    if (password != confirm) {
      control.get('confirm').setErrors({ match: true })
    } else {
      return null
    }
  };
}
