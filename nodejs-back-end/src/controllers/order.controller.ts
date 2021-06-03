import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { OrderEntity } from '../entities';
import { OrderService } from '../services';

@Crud({
  model: {
    type: OrderEntity,
  },
  query: {
    join: {
      user: {},
      product: {},
    },
  },
})
@Controller('api/v1/orders')
export class OrderController implements CrudController<OrderEntity> {
  constructor(public readonly service: OrderService) {}
}
