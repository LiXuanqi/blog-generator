import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from 'src/config';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class OAuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const oauthReq = req.clone({
      params: req.params
        .set("client_id", GITHUB_CLIENT_ID)
        .set("client_secret", GITHUB_CLIENT_SECRET)
    });
    return next.handle(oauthReq);
  }
}