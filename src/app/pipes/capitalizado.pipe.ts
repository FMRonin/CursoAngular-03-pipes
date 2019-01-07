import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'capitalizado'
})

export class CapitalizadoPipe implements PipeTransform {
    
    constructor() {}

    transform(value: string, args: any[]):string{

        value = value.toLowerCase();

        let splitValues = value.split(" ");
        let finalValue = []; 

        for (const splitValue of splitValues) {

            let tmpValue = splitValue[0].toUpperCase() + splitValue.substr(1);
            
            console.log(tmpValue);

            finalValue.push(tmpValue);
        }

        return finalValue.join(" ");
    }
}