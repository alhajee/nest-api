import { Module } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';

@Module({
  controllers: [CustomersController]
})
export class CustomersModule {}
