import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface InferenceResponse {
  response: string;
}

@Injectable({
  providedIn: 'root'
})
export class InferenceService {
  port = '3000';
  to_replace_port = '4200';
  // url = `http://0.0.0.0:${this.port}/infer`;
  // url = `${window.location.origin.split(':')[0]}:${this.port}/infer`;
  url = `${window.location.origin.replace(this.to_replace_port, this.port)}/infer`;

  constructor(private http: HttpClient) {
  }

  infer(text: string) {
    console.log(this.url);
    return this.http.post<InferenceResponse>(this.url, {
      input: text,
    }, {});
  }
}
