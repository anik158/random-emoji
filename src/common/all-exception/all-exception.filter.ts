import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { timestamp } from 'rxjs';
import { Response } from 'express';
@Catch(HttpException)
export class AllExceptionFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {

    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    const isHttpException = exception instanceof HttpException;
    const statusCode = isHttpException ? exception.getStatus() : 500;

    response.status(statusCode);
    response.json({
      message: isHttpException ? exception.message : `An unexpected error occurred!`,
      statusCode: statusCode,
      timestamp: new Date().toISOString(),
      path: request.url,
    })
  }
}
