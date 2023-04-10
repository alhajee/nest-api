import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Get(':customerId')
  getCustomer(
    @Param('customerId', ParseIntPipe) customerId: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const customer = this.customerService.findCustomerById(customerId);
    if (customer) {
      return res.send(customer);
    } else {
      return res.status(400).send({
        msg: 'Customer not found!',
      });
    }
  }

  @Get('/search/:customerId')
  searchCustomer(@Param('customerId', ParseIntPipe) customerId: number) {
    const customer = this.customerService.findCustomerById(customerId);
    if (customer) {
      return customer;
    } else {
      throw new HttpException('Customer not found!', HttpStatus.BAD_REQUEST);
    }
  }

  @Get('')
  getAllCustomers() {
    return this.customerService.getCustomers();
  }

  @UsePipes(ValidationPipe)
  @Post('create')
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    this.customerService.createCustomer(createCustomerDto);
  }
}
