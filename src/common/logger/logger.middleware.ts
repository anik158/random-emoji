import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log(`This is a log from the LoggerMiddleware. Request URL: ${req.url}, Request Method: ${req.method}`);
    next();
  }
}
