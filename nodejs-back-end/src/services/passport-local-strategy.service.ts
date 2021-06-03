import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Strategy } from 'passport-local';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities';

@Injectable()
export class PassportLocalStrategyService extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    super({});
  }

  public async validate(
    username: string,
    password: string,
  ): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      username,
      password,
    });
    if (!user) {
      throw new UnauthorizedException(
        `Not found user by username "${username}" or password invalid!`,
      );
    }
    return user;
  }
}
