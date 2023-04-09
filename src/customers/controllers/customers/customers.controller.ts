import { Controller, Get, Param, ParseIntPipe, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Get(':userId')
  getCustomer(
    @Param('userId', ParseIntPipe) userId: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const customer = this.customerService.findCustomerById(userId);
    if (customer) {
      return res.send(customer);
    } else {
      return res.status(400).send({
        msg: 'Customer not found!',
      });
    }
  }
}
