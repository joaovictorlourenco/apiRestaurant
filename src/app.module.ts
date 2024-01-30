import { Module } from '@nestjs/common'
import { RestaurantModule } from './modules/restaurant/restaurant.module'
import { UserModule } from './modules/user/user.module'
import { AuthModule } from './modules/auth/auth.module'
import { ProductsModule } from './modules/products/products.module'

@Module({
  imports: [UserModule, RestaurantModule, AuthModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
