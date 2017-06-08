import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Injectable} from "@angular/core";
/**
 * Created by wangao on 2017/6/8.
 */

@Injectable()
export class SellerService {

  private url:string = 'api/seller';

  constructor(private http: Http) { }

  getSeller(): Promise<object> {
    return this.http.get(this.url).toPromise()
    .then(res => res.json().data as object || {});
  }



}
