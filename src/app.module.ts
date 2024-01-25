import { Module } from '@nestjs/common'
import { RestaurantModule } from './modules/restaurant/restaurant.module'
import { UserModule } from './modules/user/user.module'
import { AuthModule } from './modules/auth/auth.module'

@Module({
  imports: [UserModule, RestaurantModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
