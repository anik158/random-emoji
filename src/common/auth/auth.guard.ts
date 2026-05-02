import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { log } from 'console';
import { Observable } from 'rxjs';
import { LoggerService } from '../../logger.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private readonly logger: LoggerService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    this.logger.log('AuthGuard: Checking API key for incoming request.');
    const request = context.switchToHttp().getRequest();

    // throw new UnauthorizedException();
 
    if(request.header(`x-key-api`) !== 'SECRET') {
      log('AuthGuard: Access denied. Invalid API key.');
      return false;
    }
    

    this.logger.log('AuthGuard: Access granted. Valid API key.');
    return true
  }
}
