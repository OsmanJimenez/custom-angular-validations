import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import validationsJson from './../assets/validations.json';

interface ValidationPattern {
  [key: string]: RegExp;
}

@Injectable({
  providedIn: 'root'
})
export class NgxValidationsService {
  readonly patterns: ValidationPattern;

  constructor() {
    const validationStrings: { [key: string]: string } = validationsJson;
    this.patterns = Object.keys(validationStrings).reduce((acc, key) => {
      acc[key] = new RegExp(validationStrings[key]);
      return acc;
    }, {} as ValidationPattern);
  }

  Validation(min: number, max: number, option: string, requerid?: boolean) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const selectedPattern = this.patterns[option];

      const value = control.value;
      const isEmpty = value === null || value === '';

      if (requerid === false && isEmpty) {
        return null;
      }

      if (isEmpty) {
        return { nameRequerid: true };
      }

      if (!selectedPattern) {
        return { invalidPattern: true };
      }

      if (!selectedPattern.test(value)) {
        return { [option]: true };
      }

      if (value.length <= min) {
        return { nameNumberMin: true, min };
      }

      if (value.length >= max) {
        return { nameNumberMax: true, max };
      }

      return null;
    };
  }

}
