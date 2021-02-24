import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as _ from 'lodash';
import { PathParseService } from './path-parse.service';
import {environment} from '../../../environments/environment';

export enum ApiEnum {
  API_ROOT = 'api'
}
export type ApiType = ApiEnum.API_ROOT;

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {
  constructor(
    private httpClient: HttpClient,
    private pathParseService: PathParseService
  ) {}

  get$<T>(api: ApiType, endpoint: string, params?: any): Observable<T> {
    const { url, parsedParams } = this.manageParams(api, endpoint, params);
    return this.httpClient.get<T>(url, { params: parsedParams });
  }
 
  post$<T>(api: ApiType, endpoint: string, body: any, params?: any): Observable<T> {
    const { url, parsedParams } = this.manageParams(api, endpoint, params);
    const headers = this.getPostHeaders();
    return this.httpClient.post<T>(url, body, { headers, params: parsedParams });
  }

  patch$<T>(api: ApiType, endpoint: string, body: any, params?: any): Observable<T> {
    const { url, parsedParams } = this.manageParams(api, endpoint, params);
    const headers = this.getPostHeaders();
    return this.httpClient.patch<T>(url, body, { headers, params: parsedParams });
  }

  put$<T>(api: ApiType, endpoint: string, body: any, params?: any): Observable<T> {
    const { url, parsedParams } = this.manageParams(api, endpoint, params);
    const headers = this.getPostHeaders();
    return this.httpClient.put<T>(url, body, { headers, params: parsedParams });
  }

  delete$<T>(api: ApiType, endpoint: string, params?: any): Observable<T> {
    const { url, parsedParams } = this.manageParams(api, endpoint, params);
    return this.httpClient.delete<T>(url, { params: parsedParams });
  }

  private manageParams(api: ApiType, endpoint: string, params?: any) {
    let url = this.getPath(api, endpoint);
    const pathParams = this.pathParseService.getPathParams(url);
    url = this.pathParseService.replacePathParams(url, params);
    const parsedParams = this.removePathParamsInParams(params, pathParams);
    return { url, parsedParams };
  }

  private getPath(api: ApiType, endpointId: string): string {
    return `${environment.api[api]}${endpointId}`;
  }

  private getPostHeaders(): any {
    return {
      'Content-type': 'application/json'
    };
  }

  private removePathParamsInParams(params, pathParams) {
    const keys = _.keys(params);
    const paramsKeys = keys.filter((key) => !pathParams.find((pp) => pp === key));
    const parsedParams = {};
    paramsKeys.forEach((pk) => parsedParams[pk] = params[pk]);
    return parsedParams;
  }

  /**
   * Método encargado de gestionar los errores al realizar la petición de datos a la API
   * @param operation Operación que ha generado el error
   * @param result Resultado del error (Opcional)
   */
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
