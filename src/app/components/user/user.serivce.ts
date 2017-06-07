import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './user.model';

@Injectable()
export class UserService {
  private url = 'http://localhost:3000/api/user';
  USERS : User[] = [{"name":"thanh nam","email":"nam@gmail.com"},{"name":"Nguyet","email":"nguyet@gmail.com"}];

  constructor(private http: Http){}

  getUser(): Observable<any>{
    return this.http.get(this.url)
                    .map((res:Response) => res.json())
                    .catch(this.handleError);
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
