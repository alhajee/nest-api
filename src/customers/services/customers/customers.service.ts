import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  findCustomer() {
    return {
      id: 1,
      email: 'dummy@email.com',
      createdAt: new Date(),
    };
  }
}
