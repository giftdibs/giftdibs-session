import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  SessionService
} from './session.service';

import {
  SessionStartupModule
} from './session-startup.module';

import {
  GD_API_URL
} from './api-url-token';

@NgModule({
  imports: [
    CommonModule,
    SessionStartupModule
  ],
  providers: [
    SessionService
  ]
})
export class SessionModule {
  public static forRoot(apiUrl: string) {
    return {
      ngModule: SessionModule,
      providers: [{
        provide: GD_API_URL,
        useValue: apiUrl
      }]
    };
  }
}
