import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noCache',
})
export class NoCachePipe implements PipeTransform {
  transform(url: string): string {
    return `${url}?_=${Date.now()}`;
  }
}
