import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column('varchar')
  public username: string;

  @Column('varchar')
  public password: string;
}
