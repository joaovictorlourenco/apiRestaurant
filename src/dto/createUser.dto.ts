import { IsString, IsOptional } from 'class-validator'

export class UserCreateDto {
  @IsString()
  id: string

  @IsString()
  email: string

  @IsOptional()
  @IsString()
  name?: string

  @IsString()
  password: string
}
