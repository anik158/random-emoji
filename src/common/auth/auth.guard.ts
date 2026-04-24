import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { log } from 'console';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest();

    throw new UnauthorizedException();  
 
    if(request.header(`x-key-api`) !== 'SECRET') {
      log('AuthGuard: Access denied. Invalid API key.');
      return false;
    }
    
    console.log('AuthGuard: Access granted. Valid API key.');
    return true
  }
}
