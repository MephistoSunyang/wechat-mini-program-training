import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductEntity } from './product.entity';
import { UserEntity } from './user.entity';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @CreateDateColumn()
  public createdDate: Date;

  @Column('int')
  public userId: number;

  @Column('int')
  public productId: number;

  @JoinColumn({ name: 'userId' })
  @ManyToOne(() => UserEntity)
  public user: UserEntity;

  @JoinColumn({ name: 'productId' })
  @ManyToOne(() => ProductEntity)
  public product: ProductEntity;
}
