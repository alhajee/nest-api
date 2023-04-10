import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Hello world! ValidateCustomer Middleware triggered!');
    next();
  }
}
