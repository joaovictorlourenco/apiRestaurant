import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'src/database/prisma.service'
import { UserCreateDto } from 'src/dto/createUser.dto'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findOne(email: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        email: email,
      },
    })

    return user
  }

  async create({ email, name, password }: UserCreateDto) {
    const salt = await bcrypt.genSalt()

    password = await bcrypt.hash(password, salt)

    const user = await this.prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    })

    return {
      ...user,
      password: undefined,
    }
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany()
  }
}
