import { AuthGuard } from './auth.guard';
import { ExecutionContext } from '@nestjs/common';
import { createMock } from  '@golevelup/ts-jest';
import { LoggerService } from '../../logger.service';


describe('AuthGuard', () => {
  const authGuard = new AuthGuard(new LoggerService());

  it('should be defined', () => {
    expect(authGuard).toBeDefined();
  });

  it('should return true for valid API key', () => {
    const context = createMock<ExecutionContext>({
      switchToHttp: () => ({
        getRequest: () => ({
          header: () => 'SECRET',
          headers: { 'x-key-api': 'SECRET' },
        }),
      }),
    });

    const result = authGuard.canActivate(context);
    expect(result).toBe(true);
  });

    it('should return true for valid API key', () => {
    const context = createMock<ExecutionContext>({
      switchToHttp: () => ({
        getRequest: () => ({
          header: () => 'SECRET', 
         headers: { 'x-key-api': 'SECRET' },
        }),
      }),
    });

    const result = authGuard.canActivate(context);
    expect(result).toBe(true);
  });


      it('should return false if there is no header passed in', () => {
    const context = createMock<ExecutionContext>({
      switchToHttp: () => ({
        getRequest: () => ({
          header: () => undefined, 
          headers: { },
        }),
      }),
    });

    const result = authGuard.canActivate(context);
    expect(result).toBe(false);
  });

      it('should return false if api key is invalid', () => {
    const context = createMock<ExecutionContext>({
      switchToHttp: () => ({
        getRequest: () => ({
          header: () => 'INVALID_KEY', 
        }),
      }),
    });

    const result = authGuard.canActivate(context);
    expect(result).toBe(false);
  });


});
