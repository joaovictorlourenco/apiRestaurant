import { Module } from '@nestjs/common'
import { UserModule } from './modules/user/user.module'
import { RestaurantModule } from './modules/restaurant/restaurant.module'

@Module({
  imports: [UserModule, RestaurantModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
