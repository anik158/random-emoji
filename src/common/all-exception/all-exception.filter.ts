import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { timestamp } from 'rxjs';

@Catch()
export class AllExceptionFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    response.json({
      message: `TODO`,
      statusCode: `TODO`,
      timestamp: new Date().toISOString(),
      path: `TODO`,
    })
  }
}
