import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: NextFunction) {
    console.log('Hello world! ValidateCustomer Middleware triggered!');
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(HttpStatus.FORBIDDEN).send({
        error: 'No Authentication Token provided',
      });
    }
    if (authorization !== '1234') {
      return res.status(HttpStatus.FORBIDDEN).send({
        error: 'Invalid Authorization Token provided',
      });
    }
    next();
  }
}
