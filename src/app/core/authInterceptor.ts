import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
// import { loadingMessages, specialUrl } from './loading.config';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  requestsNum = 0; // 请求中的http数量
  constructor(private injector: Injector) { }

  get msg(): NzMessageService {
    return this.injector.get(NzMessageService);
  }

  private goTo(url: string) {
    setTimeout(() => this.injector.get(Router).navigateByUrl(url));
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
  > {
    // 不需要动画的请求
    if (!(req.headers.get('is-not-loading') === 'true')) {
      this.requestsNum++;
    }

    // let message = loadingMessages.default;
    // 按请求地址自定义加载提示词
    // specialUrl.forEach((item) => {
    //   if (item.url === req.url) {
    //     message = item.messages;
    //   }
    // });

    // 根据code自定义加载提示词
    // message = loadingMessages[req.headers.get('loading-text')]
    //   ? loadingMessages[req.headers.get('loading-text')]
    //   : message;

    // const loadingText = document.querySelector('#js-loading-text');
    // const loading = document.querySelector('#js-loading');

    // if (loadingText) {
    //   loadingText.innerHTML = message;
    //   if (this.requestsNum) {
    //     loading.style.display = 'inline-block';
    //   }
    // }


    const clonedRequest = req.clone({
      headers: req.headers.set('X-Access-Token', window.localStorage.getItem('token') || '')
    });
    return next.handle(clonedRequest).pipe(
      mergeMap((event: any) => {
        // Response
        if (event instanceof HttpResponse && event.status === 200) {
          if (!(req.headers.get('is-not-loading') === 'true')) {
            this.requestsNum--;
          }
          // if (!this.requestsNum && loadingText) {
          //   loading.style.display = 'none';
          // }
          if (
            event.body &&
            (event.body.status === 700 ||
              event.body.status === 800 ||
              event.body.status === 500)
          ) {
            this.msg.error(event.body.message);
            return of(event.body.message);
          }
          return of(event);
        }

        return of(event);
      }),
      catchError((err: HttpErrorResponse) => {
        if (!(req.headers.get('is-not-loading') === 'true')) {
          this.requestsNum--;
        }
        // if (!this.requestsNum) {
        //   loading.style.display = 'none';
        // }
        if (err.status === 401) {
          if (err.error && err.error.msg) {
            this.msg.error(err.error.msg);
          } else {
            // this.msg.error("对不起，未登录授权,请重新登录！");
          }
          this.goTo('/login');
        } else if (err.status === 403) {
          // this.msg.error("对不起，你没有此权限！");
          this.goTo('/403');
        } else if (err.status === 404) {
          // this.msg.error("对不起，你访问的资源不存在！");
          this.goTo('/404');
        } else if (err.status === 500 || err.status === 504) {
          // this.msg.error("系统不能正常访问，请联系系统管理员。");
          this.goTo('/500');
        } else {
          // this.msg.error("系统不能正常访问 status:" + err.status);
          this.goTo('/500');
        }
        return of(event);
      })
    );
  }
}
