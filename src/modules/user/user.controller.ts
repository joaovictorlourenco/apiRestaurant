import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import { User } from '@prisma/client'
import { AuthGuard } from '../auth/auth.guard'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Post('/create')
  async create(@Body() user: User) {
    return this.userService.create(user)
  }

  @UseGuards(AuthGuard)
  @Get('/list')
  async findAll(): Promise<User[]> {
    return this.userService.findAll()
  }
}
