import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BrowserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const  userAgent =  request.header(`user-agent`);

    const browserClient = userAgent.split(` `)[0] || 'Unknown Browser';
    request.headers.browserClient = browserClient;
    
    console.log(`BrowserInterceptor: Detected browser client
       - ${browserClient}`);
    return next.handle();
  }
}
