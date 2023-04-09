import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'aliyu@email.com',
      name: 'Aliyu Aliyu',
      createdAt: new Date(),
    },
    {
      id: 2,
      email: 'grace@email.com',
      name: 'Grace Grace',
      createdAt: new Date(),
    },
    {
      id: 3,
      email: 'ola@email.com',
      name: 'Ola Ola',
      createdAt: new Date(),
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id == id);
  }

  getCustomers() {
    return this.customers;
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push({
      ...customerDto,
      createdAt: new Date(),
    });
  }
}
