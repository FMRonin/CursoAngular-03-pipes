import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPassword'
})
export class MaskPasswordPipe implements PipeTransform {

  transform(value: string, isMasked: boolean=true): any {

    let maskedValue:string = ""

    if(isMasked){
      for (const letter of value) {
        maskedValue += "*";
      }
    }else{
      maskedValue = value;
    }

    return maskedValue;
  }

}
