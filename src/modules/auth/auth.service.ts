import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { compare } from 'bcrypt'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    pass: string,
  ): Promise<{ access_token: string } | { error: string }> {
    const user = await this.usersService.findOne(email)

    const isMatch = await compare(pass, user.password)

    if (!isMatch) {
      throw new UnauthorizedException()
    }

    const payload = { sub: user.id, email: user.email }

    try {
      const jwtToken = await this.jwtService.signAsync(payload)
      return {
        access_token: jwtToken,
      }
    } catch (error) {
      return {
        error: 'Ocorreu um erro ao criar o token JWT',
      }
    }
  }
}
