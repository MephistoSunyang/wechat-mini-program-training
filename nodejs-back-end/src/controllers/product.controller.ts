import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ProductEntity } from '../entities';
import { ProductService } from '../services';

@Crud({
  model: {
    type: ProductEntity,
  },
})
@Controller('api/v1/products')
export class ProductController implements CrudController<ProductEntity> {
  constructor(public readonly service: ProductService) {}
}
