import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class NgxValidationsService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXZhbGlkYXRpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdGlvbnMvc3JjL2xpYi9uZ3gtdmFsaWRhdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0zQyxNQUFNLE9BQU8scUJBQXFCO0lBZ0JoQztRQWZBLFlBQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ2xELGdCQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN0RCxjQUFTLEdBQUcsSUFBSSxNQUFNLENBQ3BCLDBGQUEwRixDQUMzRixDQUFDO1FBQ0YsaUJBQVksR0FBRyxJQUFJLE1BQU0sQ0FDdkIsa0pBQWtKLENBQ25KLENBQUM7UUFDRixlQUFVLEdBQUcsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEMsWUFBTyxHQUFHLElBQUksTUFBTSxDQUNsQixrRUFBa0UsQ0FDbkUsQ0FBQztRQUNGLG9CQUFlLEdBQUcsSUFBSSxNQUFNLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUM1RCxXQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFbEIsQ0FBQztJQUVqQixVQUFVLENBQUMsR0FBVyxFQUFFLEdBQVcsRUFBRSxNQUFjLEVBQUUsUUFBa0I7UUFDckUsTUFBTSxPQUFPLEdBQUc7WUFDZCxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDNUIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVWLE9BQU8sQ0FBQyxPQUF3QixFQUFjLEVBQUU7WUFDOUMsSUFDRSxRQUFRLElBQUksS0FBSztnQkFDakIsT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJO2dCQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQ3pCLENBQUM7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDO2lCQUFNLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDaEMsQ0FBQztpQkFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3BCLE9BQU8sRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDbEMsQ0FBQztpQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDNUIsQ0FBQztpQkFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUN0QyxDQUFDO2lCQUFNLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ3RDLENBQUM7WUFFRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQztJQUNKLENBQUM7OEdBbERVLHFCQUFxQjtrSEFBckIscUJBQXFCLGNBRnBCLE1BQU07OzJGQUVQLHFCQUFxQjtrQkFIakMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neFZhbGlkYXRpb25zU2VydmljZSB7XHJcbiAgcGF0dGVybiA9IG5ldyBSZWdFeHAoJ15bYS16QS1aw7HDkcOhw6nDrcOzw7rDgcOJw43Dk8OacyBdKyQnKTtcclxuICBvbmx5TGV0dGVycyA9IG5ldyBSZWdFeHAoJ15bYS16QS1aw7HDkcOhw6nDrcOzw7rDgcOJw43Dk8OacyBdKyQnKTtcclxuICBvbmx5RW1haWwgPSBuZXcgUmVnRXhwKFxyXG4gICAgJ15bX0EtWmEtejAtOS1cXFxcK10rKFxcXFwuW19BLVphLXowLTktXSspKkBbQS1aYS16MC05LV0rKFxcXFwuW0EtWmEtejAtOV0rKSooXFxcXC5bQS1aYS16XXsyLH0pJCdcclxuICApO1xyXG4gIG9ubHlQYXNzd29yZCA9IG5ldyBSZWdFeHAoXHJcbiAgICAnXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlxcXFxkKSg/PS4qW0AsKygpLS4kISUqPybCocK/I1wiwrRgwqjCsMKsXFwnOjt7fTw9PlxcXFxcXFxcfnxeL19bXFxcXF1dKVtBLVphLXpcXFxcZEAsKygpLS4kIcK/JSo/JsKhI1wiwrRgwqjCsMKsXFwnOjt7fTw9PlxcXFxcXFxcfnxeL19bXFxcXF1dezYsfSQnXHJcbiAgKTtcclxuICBvbmx5TnVtYmVyID0gbmV3IFJlZ0V4cCgvXihbMC05XSkqJC8pO1xyXG4gIGFueVRleHQgPSBuZXcgUmVnRXhwKFxyXG4gICAgJ15bX0EtWmEtejAtOS1aw7HDkcOhw6nDrcOzw7rDgcOJw43Dk8Oac0AsKygpLS4k4omlISUqPyYvwqHCvyNcIsK0YMKowrDCrFxcJzo7e308PT4gXSskJ1xyXG4gICk7XHJcbiAgb25seU51bWJlcnNUZXh0ID0gbmV3IFJlZ0V4cCgnXltBLVphLXowLTlaw7HDkcOhw6nDrcOzw7rDgcOJw43Dk8OaXSskJyk7XHJcbiAgbWluT25lID0gbmV3IFJlZ0V4cCgvXihbMS05XSkqJC8pO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBWYWxpZGF0aW9uKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciwgb3B0aW9uOiBzdHJpbmcsIHJlcXVlcmlkPzogYm9vbGVhbikge1xyXG4gICAgY29uc3QgcGF0dGVybiA9IHtcclxuICAgICAgb25seUxldHRlcjogdGhpcy5vbmx5TGV0dGVycyxcclxuICAgICAgb25seUVtYWlsOiB0aGlzLm9ubHlFbWFpbCxcclxuICAgICAgb25seVBhc3N3b3JkOiB0aGlzLm9ubHlQYXNzd29yZCxcclxuICAgICAgb25seU51bWJlcjogdGhpcy5vbmx5TnVtYmVyLFxyXG4gICAgICBtaW5PbmU6IHRoaXMubWluT25lLFxyXG4gICAgICBvbmx5TnVtYmVyc1RleHQ6IHRoaXMub25seU51bWJlcnNUZXh0LFxyXG4gICAgICBhbnlUZXh0OiB0aGlzLmFueVRleHQsXHJcbiAgICB9W29wdGlvbl07XHJcblxyXG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBhbnkgfCBudWxsID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHJlcXVlcmlkID09IGZhbHNlICYmXHJcbiAgICAgICAgY29udHJvbC52YWx1ZSAhPSBudWxsICYmXHJcbiAgICAgICAgY29udHJvbC52YWx1ZS5sZW5ndGggPT0gMFxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfSBlbHNlIGlmIChjb250cm9sLnZhbHVlICE9IG51bGwgJiYgY29udHJvbC52YWx1ZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHJldHVybiB7IG5hbWVSZXF1ZXJpZDogdHJ1ZSB9O1xyXG4gICAgICB9IGVsc2UgaWYgKCFwYXR0ZXJuKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgaW52YWxpZFBhdHRlcm46IHRydWUgfTtcclxuICAgICAgfSBlbHNlIGlmICghcGF0dGVybi50ZXN0KGNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgW29wdGlvbl06IHRydWUgfTtcclxuICAgICAgfSBlbHNlIGlmIChjb250cm9sLnZhbHVlICE9IG51bGwgJiYgY29udHJvbC52YWx1ZS5sZW5ndGggPD0gbWluKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgbmFtZU51bWJlck1pbjogdHJ1ZSwgbWluIH07XHJcbiAgICAgIH0gZWxzZSBpZiAoY29udHJvbC52YWx1ZSAhPSBudWxsICYmIGNvbnRyb2wudmFsdWUubGVuZ3RoID49IG1heCkge1xyXG4gICAgICAgIHJldHVybiB7IG5hbWVOdW1iZXJNYXg6IHRydWUsIG1heCB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==