import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    return value.charAt(0).toUpperCase() + value.toLowerCase().slice(1)
  }
}
