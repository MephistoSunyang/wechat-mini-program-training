import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserEntity } from '../entities';

@Controller('api/v1')
export class PassportLocalController {
  @Post('login')
  @UseGuards(AuthGuard('local'))
  public async login(@Request() request: Express.Request): Promise<UserEntity> {
    return request.user as UserEntity;
  }
}
