import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get('')
  getCustomer() {
    return {
      id: 1,
      email: 'dummy@email.com',
      createdAt: new Date(),
    };
  }
}
