import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'
import { ProductsService } from './products.service'
import { AuthGuard } from '../auth/auth.guard'
import { ProductCreateDto } from 'src/dto/createProduct.dto'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(AuthGuard)
  @Get(':id')
  async findByIdRestaurants(id: string) {
    return this.productsService.findByIdRestaurants(id)
  }

  @UseGuards(AuthGuard)
  @Post('/create')
  async CreateProduct(@Body() data: ProductCreateDto) {
    return this.productsService.CreateProduct(data)
  }
}
