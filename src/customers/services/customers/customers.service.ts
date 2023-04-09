import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      email: 'aliyu@email.com',
      createdAt: new Date(),
    },
    {
      id: 2,
      email: 'grace@email.com',
      createdAt: new Date(),
    },
    {
      id: 3,
      email: 'ola@email.com',
      createdAt: new Date(),
    },
  ];

  findCustomerById(id: number) {
    return this.users.find((user) => user.id == id);
  }
}
