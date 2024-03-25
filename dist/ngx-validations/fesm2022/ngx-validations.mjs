import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';

class NgxValidationsService {
    constructor() {
        this.pattern = new RegExp('^[a-zA-ZñÑáéíóúÁÉÍÓÚs ]+$');
        this.onlyLetters = new RegExp('^[a-zA-ZñÑáéíóúÁÉÍÓÚs ]+$');
        this.onlyEmail = new RegExp('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$');
        this.onlyPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@,+()-.$!%*?&¡¿#"´`¨°¬\':;{}<=>\\\\~|^/_[\\]])[A-Za-z\\d@,+()-.$!¿%*?&¡#"´`¨°¬\':;{}<=>\\\\~|^/_[\\]]{6,}$');
        this.onlyNumber = new RegExp(/^([0-9])*$/);
        this.anyText = new RegExp('^[_A-Za-z0-9-ZñÑáéíóúÁÉÍÓÚs@,+()-.$≥!%*?&/¡¿#"´`¨°¬\':;{}<=> ]+$');
        this.onlyNumbersText = new RegExp('^[A-Za-z0-9ZñÑáéíóúÁÉÍÓÚ]+$');
        this.minOne = new RegExp(/^([1-9])*$/);
    }
    Validation(min, max, option, requerid) {
        const pattern = {
            onlyLetter: this.onlyLetters,
            onlyEmail: this.onlyEmail,
            onlyPassword: this.onlyPassword,
            onlyNumber: this.onlyNumber,
            minOne: this.minOne,
            onlyNumbersText: this.onlyNumbersText,
            anyText: this.anyText,
        }[option];
        return (control) => {
            if (requerid == false &&
                control.value != null &&
                control.value.length == 0) {
                return null;
            }
            else if (control.value != null && control.value.length == 0) {
                return { nameRequerid: true };
            }
            else if (!pattern) {
                return { invalidPattern: true };
            }
            else if (!pattern.test(control.value)) {
                return { [option]: true };
            }
            else if (control.value != null && control.value.length <= min) {
                return { nameNumberMin: true, min };
            }
            else if (control.value != null && control.value.length >= max) {
                return { nameNumberMax: true, max };
            }
            return null;
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: NgxValidationsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: NgxValidationsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: NgxValidationsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

/*
 * Public API Surface of ngx-validations
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxValidationsService };
//# sourceMappingURL=ngx-validations.mjs.map
