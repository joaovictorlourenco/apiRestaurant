import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UnauthorizedException,
} from '@nestjs/common'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, string>) {
    const { email, password } = signInDto

    const jwtToken = this.authService.signIn(email, password)

    if (!jwtToken) {
      throw new UnauthorizedException()
    }
    return jwtToken
  }
}
