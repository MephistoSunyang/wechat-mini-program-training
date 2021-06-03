import { Injectable } from '@nestjs/common';
import { ProductEntity } from '../entities';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService extends TypeOrmCrudService<ProductEntity> {
  constructor(
    @InjectRepository(ProductEntity)
    protected readonly productRepository: Repository<ProductEntity>,
  ) {
    super(productRepository);
  }
}
