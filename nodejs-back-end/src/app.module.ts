import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  ProductController,
  OrderController,
  PassportLocalController,
} from './controllers';
import { ProductEntity, OrderEntity, UserEntity } from './entities';
import {
  ProductService,
  OrderService,
  PassportLocalStrategyService,
  PassportSerializerService,
} from './services';

const entities = [ProductEntity, OrderEntity, UserEntity];
const modules = [
  TypeOrmModule.forRoot({
    type: 'mssql',
    host: 'localhost\\SQLEXPRESS',
    port: 1433,
    database: 'wechat-training',
    username: 'adis',
    password: 'Admin123',
    entities: [`${__dirname}/entities/**/**.entity{.ts,.js}`],
    logging: true,
    synchronize: true,
    options: {
      encrypt: false,
    },
  }),
  TypeOrmModule.forFeature(entities),
];
const controllers = [
  ProductController,
  OrderController,
  PassportLocalController,
];
const providers = [
  ProductService,
  OrderService,
  PassportLocalStrategyService,
  PassportSerializerService,
];

@Module({
  imports: [...modules],
  controllers,
  providers,
})
export class AppModule {}
