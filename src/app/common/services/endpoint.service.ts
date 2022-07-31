import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from '~/config';
import { EndpointState } from './endpointstate.interface';


@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  endpoints: {[endpoint: string]: EndpointState } = {}

  constructor(private httpClient: HttpClient) { }

  get(endpoint: string) {
    if(this.endpoints[endpoint]) return this.endpoints[endpoint].response

    const url = `${config.apiHost}${endpoint}`
    
    const subscription = this.httpClient.get(url).subscribe(data => {
      this.endpoints[endpoint].response.next(data)
    })
    const response = new BehaviorSubject(this.endpoints[endpoint].initialValue ?? {})
    this.endpoints[endpoint] = { response, subscription}

    return response
  }
}
