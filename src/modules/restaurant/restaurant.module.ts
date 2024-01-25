import { Module } from '@nestjs/common'
import { RestaurantService } from './restaurant.service'
import { RestaurantController } from './restaurant.controller'
import { PrismaService } from 'src/database/prisma.service'

@Module({
  controllers: [RestaurantController],
  providers: [RestaurantService, PrismaService],
})
export class RestaurantModule {}
