import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SessionService } from './session.service';

import { SessionStartupModule } from './session-startup.module';

import { GD_API_URL } from './api-url-token';

import { GD_AUTHORIZATION_PROVIDERS } from '../authorization/authorization-providers';

@NgModule({
  imports: [CommonModule, SessionStartupModule],
  providers: [GD_AUTHORIZATION_PROVIDERS, SessionService],
})
export class SessionModule {
  public static forRoot(apiUrl: string): ModuleWithProviders<SessionModule> {
    return {
      ngModule: SessionModule,
      providers: [
        {
          provide: GD_API_URL,
          useValue: apiUrl,
        },
      ],
    };
  }
}
