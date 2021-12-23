import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, of, tap} from "rxjs";
import {Injectable} from "@angular/core";
import {LoaderService} from "./services/loader.service";

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache: Map<string, HttpResponse<any>> = new Map<string, HttpResponse<any>>();

  constructor(private loaderService: LoaderService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cachedResponse: HttpResponse<any> | undefined = this.cache.get(req.urlWithParams);

    if(cachedResponse) {
      return of(cachedResponse.clone());
    } else {
      this.loaderService.showLoader();
      return next.handle(req).pipe(
        tap(event => {
          this.loaderService.hideLoader();
          if(event instanceof HttpResponse) {
            this.cache.set(req.urlWithParams, event.clone());
          }
        })
      );
    }
  }
}
