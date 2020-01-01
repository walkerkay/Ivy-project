import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'workItemColor'
})
export class WorkItemColorPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return 'red';
    }
}
