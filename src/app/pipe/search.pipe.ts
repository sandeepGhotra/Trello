import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any=[], args?: any): any {
    if(args){
      if(args.length < 1 ){
        return value;
      }
      return value.filter(data => (data.task.toLowerCase().indexOf(args.toLowerCase()) !== -1 ));
    }
    return value;
  }


}
