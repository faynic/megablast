import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toHours'
})
export class ToHoursPipe implements PipeTransform {

  transform(n): any {
    const hours = n / 60 / 60;

    return hours.toFixed(2);
  }

}
