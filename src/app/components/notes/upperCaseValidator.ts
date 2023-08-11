import { AbstractControl } from "@angular/forms";

export function upperCaseValidator(control: AbstractControl) {
    const author = control.value as string;
    if(author !== author?.toUpperCase()) {
        return { upperCase: true };
    } else
    return null;
}
