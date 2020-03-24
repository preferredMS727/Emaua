import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[noImage]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NoImageDirective, multi: true }]
})
export class NoImageDirective implements Validator {

  private validator: ValidatorFn = noImageValidator();

  validate(control: AbstractControl): ValidationErrors | null {
    return this.validator(control);
  }
}

export function noImageValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    let filename: string = control.value;

    if (filename && filename.length && (!isImage(filename))) {
      control.setErrors({ noImage: true });
    } else {
      return null;
    }

  };
}

export function isImage(filename: string): boolean {
  return (/\.(gif|jpg|jpeg|tiff|png)$/i.test(filename));
}

