import { Injectable, Inject } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SessionService } from './session.service';

import { GD_API_URL } from './api-url-token';

@Injectable()
export class SessionStartupService {
  private resourceUrl: string;

  constructor(
    private http: HttpClient,
    private sessionService: SessionService,
    @Inject(GD_API_URL) private apiUrl: string,
  ) {
    this.resourceUrl = apiUrl + '/auth';
  }

  public load(): Promise<any> {
    const token = this.sessionService.token;
    const headers = new HttpHeaders({
      Authorization: `JWT ${token}`,
    });

    return this.http
      .post(`${this.resourceUrl}/refresh-token`, {}, { headers })
      .toPromise()
      .then((data: any) => {
        this.sessionService.user = data.authResponse.user;
        this.sessionService.token = data.authResponse.token;
      })
      .catch((err: any) => {
        // Unauthenticated.
        if (err.status === 401 || err.status === 400) {
          this.sessionService.clearAll();
          return Promise.resolve();
        }

        throw err;
      });
  }
}
