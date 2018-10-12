import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResult } from '../models/akroma.result';
import { MasternodeStatusModel } from '../models/masternode.status.model';
@Injectable()
export class MasternodeService {
    constructor(private http: HttpClient) {
    }

    public getStatusList(): Observable<ApiResult<MasternodeStatusModel[]>> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        return this.http
            .get<ApiResult<MasternodeStatusModel[]>>(`https://akroma.io/api/masternodes/remote`, { headers: headers });
    }
}
