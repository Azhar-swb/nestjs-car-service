import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';

import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

import { carSchema } from './schema/car.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Car',
        schema: carSchema,
      },
    ]),
  ],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}
