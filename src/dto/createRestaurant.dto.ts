import { Product } from '@prisma/client'
import { Type } from 'class-transformer'
import {
  IsString,
  IsDateString,
  IsArray,
  ValidateNested,
} from 'class-validator'
import { ProductCreateDto } from './createProduct.dto'

export class CreateRestaurantDto {
  @IsString()
  id: string

  @IsString()
  name: string

  @IsString()
  phone: string

  @IsString()
  address: string

  @IsDateString()
  createdAt: Date

  @IsDateString()
  updatedAt: Date

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductCreateDto)
  product: Product[]
}
