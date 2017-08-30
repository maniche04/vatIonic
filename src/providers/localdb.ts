import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class localJsonService {
    constructor(public http:Http) {}

getData(data:string) {
    return this.http.get("assets/data/" + data)
        .map((res:Response) => res.json()); //records in this case
  }
}
