import { AbstractControl, FormControl, Validators } from "@angular/forms";

export class CustomValidator {
    constructor() { }

    // static IsCpf(control: FormControl): boolean {
    //     const cpf = control.value;
    //     if (cpf == null) {
    //         return false;
    //     }
    //     if (cpf.length != 11) {
    //         return false;
    //     }
    //     if ((cpf == '00000000000') || (cpf == '11111111111') || (cpf == '22222222222') || (cpf == '33333333333') || (cpf == '44444444444') || (cpf == '55555555555') || (cpf == '66666666666') || (cpf == '77777777777') || (cpf == '88888888888') || (cpf == '99999999999')) {
    //         return false;
    //     }
    //     let numero: number = 0;
    //     let caracter: string = '';
    //     let numeros: string = '0123456789';
    //     let j: number = 10;
    //     let somatorio: number = 0;
    //     let resto: number = 0;
    //     let digito1: number = 0;
    //     let digito2: number = 0;
    //     let cpfAux: string = '';
    //     cpfAux = cpf.substring(0, 9);
    //     for (let i: number = 0; i < 9; i++) {
    //         caracter = cpfAux.charAt(i);
    //         if (numeros.search(caracter) == -1) {
    //             return false;
    //         }
    //         numero = Number(caracter);
    //         somatorio = somatorio + (numero * j);
    //         j--;
    //     }
    //     resto = somatorio % 11;
    //     digito1 = 11 - resto;
    //     if (digito1 > 9) {
    //         digito1 = 0;
    //     }
    //     j = 11;
    //     somatorio = 0;
    //     cpfAux = cpfAux + digito1;
    //     for (let i: number = 0; i < 10; i++) {
    //         caracter = cpfAux.charAt(i);
    //         numero = Number(caracter);
    //         somatorio = somatorio + (numero * j);
    //         j--;
    //     }
    //     resto = somatorio % 11;
    //     digito2 = 11 - resto;
    //     if (digito2 > 9) {
    //         digito2 = 0;
    //     }
    //     cpfAux = cpfAux + digito2;
    //     if (cpf != cpfAux) {
    //         return false;
    //     }
    //     else {
    //         return true;
    //     }
    // }

    static isCpf() {
        return (control: AbstractControl): Validators => {
            const cpf = control.value.replace(/[^0-9]*/g, '');
            if (cpf) {
                let numbers;
                let digits;
                let sum;
                let i;
                let result;
                let equalDigits;
                equalDigits = 1;
                if (cpf.length < 11) {
                    return false;
                }

                for (i = 0; i < cpf.length - 1; i++) {
                    if (cpf.charAt(i) !== cpf.charAt(i + 1)) {
                        equalDigits = 0;
                        break;
                    }
                }

                if (!equalDigits) {
                    numbers = cpf.substring(0, 9);
                    digits = cpf.substring(9);
                    sum = 0;
                    for (i = 10; i > 1; i--) {
                        sum += numbers.charAt(10 - i) * i;
                    }

                    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

                    if (result !== Number(digits.charAt(0))) {
                        return { cpfNotValid: true };
                    }
                    numbers = cpf.substring(0, 10);
                    sum = 0;

                    for (i = 11; i > 1; i--) {
                        sum += numbers.charAt(11 - i) * i;
                    }
                    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

                    if (result !== Number(digits.charAt(1))) {
                        return { cpfNotValid: true };
                    }
                    return false;
                } else {
                    return { cpfNotValid: true };
                }
            }
            return false;
        };
    }


    static EmailValidator(control: FormControl) {
        // tslint:disable-next-line:max-line-length
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(control.value)) {
            return { 'E-mail inválido': true };
        }

        return null;
    }
}