import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterContent'
})
export class filterContent implements PipeTransform {
  transform(items: any[], filter: Object): any {

    filter = filter.toString().toLowerCase();

    if (!items || !filter) {
        return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter(item => {
      var clausematch: boolean = false;
      for (let clause of item.clauses) {
        if (clause.name.toLowerCase().indexOf(filter) !== -1 || clause.content.toLowerCase().indexOf(filter) !== -1) {
          clausematch = true;
        }
      }
      return item.name.toLowerCase().indexOf(filter) !== -1 || item.content.toLowerCase().indexOf(filter) !== -1 || clausematch;
    });
  }
}
