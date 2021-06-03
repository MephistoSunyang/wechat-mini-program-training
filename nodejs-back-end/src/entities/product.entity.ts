import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column('nvarchar')
  public name: string;

  @Column('nvarchar')
  public description: string;

  @Column('nvarchar')
  public thumb: string;

  @Column('int')
  public price: number;
}
