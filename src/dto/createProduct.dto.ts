import { IsString, IsNumber, IsDateString } from 'class-validator'

export class ProductCreateDto {
  @IsString()
  id: string

  @IsString()
  name: string

  @IsNumber()
  price: number

  @IsString()
  description: string

  @IsString()
  restaurantId: string

  @IsDateString()
  createdAt: Date

  @IsDateString()
  updatedAt: Date
}
