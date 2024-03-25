import { AbstractControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class NgxValidationsService {
    pattern: RegExp;
    onlyLetters: RegExp;
    onlyEmail: RegExp;
    onlyPassword: RegExp;
    onlyNumber: RegExp;
    anyText: RegExp;
    onlyNumbersText: RegExp;
    minOne: RegExp;
    constructor();
    Validation(min: number, max: number, option: string, requerid?: boolean): (control: AbstractControl) => any | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxValidationsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxValidationsService>;
}
