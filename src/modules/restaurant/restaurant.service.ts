import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma.service'
import { CreateRestaurantDto } from 'src/dto/createRestaurant.dto'

@Injectable()
export class RestaurantService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateRestaurantDto) {
    const restaurant = await this.prisma.restaurant.create({
      data: {
        ...data,
        product: {
          create: data.product,
        },
      },
    })

    return restaurant
  }

  async findRestaurantByProductNameOrDescription(name: string) {
    const restaurant = await this.prisma.restaurant.findMany({
      where: {
        OR: [
          {
            name: {
              contains: name,
            },
          },
          {
            product: {
              some: {
                OR: [
                  {
                    name: {
                      contains: name,
                    },
                  },
                  {
                    description: {
                      contains: name,
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    })

    return restaurant
  }

  async findAll() {
    const restaurants = await this.prisma.restaurant.findMany({
      include: {
        product: true,
      },
    })

    return restaurants
  }

  async findById(id: string) {
    const restaurants = await this.prisma.restaurant.findUnique({
      where: {
        id: id,
      },
      include: {
        product: true,
      },
    })
    return restaurants
  }
}
