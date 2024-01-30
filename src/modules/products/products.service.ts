import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma.service'

type Products = {
  id: string
  name: string
  price: number
  description: string
  restaurantId: string
}

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async findByIdRestaurants(id: string): Promise<Products[]> {
    const products = await this.prisma.product.findMany({
      where: {
        restaurantId: id,
      },
    })
    return products
  }

  async CreateProduct(data: Products): Promise<Products> {
    const products = await this.prisma.product.create({
      data: {
        ...data,
        restaurantId: data.restaurantId,
      },
    })

    return products
  }
}
