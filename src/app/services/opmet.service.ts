import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OmpetResult, OpmetApiPostRequestQuery, OpmetApiResponse } from '../models';
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpmetService {
  constructor(private http: HttpClient) {}

  postRequest(data: OpmetApiPostRequestQuery):Observable<OpmetApiResponse> {
    return this.http.post<OpmetApiResponse>("https://ogcie.iblsoft.com/ria/opmetquery", data)
  }
}
