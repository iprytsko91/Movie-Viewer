import { HttpInterceptorFn } from '@angular/common/http';

import { api_key } from "../../../tokens";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.method === 'GET') {
    req = req.clone({
      params: req.params.set('api_key', api_key)
    })
  }

  return next(req);
};
