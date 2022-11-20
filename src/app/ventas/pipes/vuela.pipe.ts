import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform {
    transform(isFly: boolean = false): string {
        return isFly ? 'vuela' : 'no vuela'
    }
}