import { Injectable } from '@nestjs/common';
import { OrderEntity } from '../entities';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService extends TypeOrmCrudService<OrderEntity> {
  constructor(
    @InjectRepository(OrderEntity)
    protected readonly orderRepository: Repository<OrderEntity>,
  ) {
    super(orderRepository);
  }
}
