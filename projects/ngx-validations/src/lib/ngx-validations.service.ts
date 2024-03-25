import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NgxValidationsService {
  pattern = new RegExp('^[a-zA-ZñÑáéíóúÁÉÍÓÚs ]+$');
  onlyLetters = new RegExp('^[a-zA-ZñÑáéíóúÁÉÍÓÚs ]+$');
  onlyEmail = new RegExp(
    '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'
  );
  onlyPassword = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@,+()-.$!%*?&¡¿#"´`¨°¬\':;{}<=>\\\\~|^/_[\\]])[A-Za-z\\d@,+()-.$!¿%*?&¡#"´`¨°¬\':;{}<=>\\\\~|^/_[\\]]{6,}$'
  );
  onlyNumber = new RegExp(/^([0-9])*$/);
  anyText = new RegExp(
    '^[_A-Za-z0-9-ZñÑáéíóúÁÉÍÓÚs@,+()-.$≥!%*?&/¡¿#"´`¨°¬\':;{}<=> ]+$'
  );
  onlyNumbersText = new RegExp('^[A-Za-z0-9ZñÑáéíóúÁÉÍÓÚ]+$');
  minOne = new RegExp(/^([1-9])*$/);

  constructor() { }

  Validation(min: number, max: number, option: string, requerid?: boolean) {
    const pattern = {
      onlyLetter: this.onlyLetters,
      onlyEmail: this.onlyEmail,
      onlyPassword: this.onlyPassword,
      onlyNumber: this.onlyNumber,
      minOne: this.minOne,
      onlyNumbersText: this.onlyNumbersText,
      anyText: this.anyText,
    }[option];

    return (control: AbstractControl): any | null => {
      if (
        requerid == false &&
        control.value != null &&
        control.value.length == 0
      ) {
        return null;
      } else if (control.value != null && control.value.length == 0) {
        return { nameRequerid: true };
      } else if (!pattern) {
        return { invalidPattern: true };
      } else if (!pattern.test(control.value)) {
        return { [option]: true };
      } else if (control.value != null && control.value.length <= min) {
        return { nameNumberMin: true, min };
      } else if (control.value != null && control.value.length >= max) {
        return { nameNumberMax: true, max };
      }

      return null;
    };
  }
}
