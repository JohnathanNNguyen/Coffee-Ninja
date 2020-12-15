import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'censored'
})
export class CensoredPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.replace(/\d(?=\d{4})/g, "*");
  }
}
