import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByLabel'
})
export class FilterByLabelPipe implements PipeTransform {

  transform(posts: Array<Object>, targetLabels?: Array<string>): Array<Object> {
    return posts.filter((item: any) => {
      const labels: Array<any> = item.labels;
      for (let i = 0; i < labels.length; i++) {
        if (targetLabels.includes(labels[i].name)) {
          return true;
        }
      }
      return false;
    });
  }

}
