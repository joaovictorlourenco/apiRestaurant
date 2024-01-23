import { Injectable } from '@nestjs/common'
import { PrismaClient, User } from '@prisma/client'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaClient) {}

  async findOne(email: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        email: email,
      },
    })

    return user
  }

  async create({ email, name, password }: User) {
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
}
