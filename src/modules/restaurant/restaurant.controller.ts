import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'
import { RestaurantService } from './restaurant.service'
import { CreateRestaurantDto } from 'src/dto/createRestaurant.dto'
import { AuthGuard } from '../auth/auth.guard'

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @UseGuards(AuthGuard)
  @Post('/create')
  async create(@Body() restaurant: CreateRestaurantDto) {
    return this.restaurantService.create(restaurant)
  }

  @UseGuards(AuthGuard)
  @Get('/list')
  async findAll() {
    return this.restaurantService.findAll()
  }
}
