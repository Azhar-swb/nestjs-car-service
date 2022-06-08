import { HttpException, Injectable } from '@nestjs/common';
import { CARS } from './cars.mock';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { ICar } from './interface/car.interface';
import { carDto } from './car.dto';

@Injectable()
export class CarService {
  constructor(@InjectModel('Car') private readonly carModel: Model<ICar>) {}

  private cars = CARS;

  public async getCars() {
    // return this.cars;
    const cars = await this.carModel.find().exec();
    return cars;
  }

  public async addCar(car: carDto) {
    // this.cars.push(car);
    // return this.cars;
    const newCar = await new this.carModel(car);
    return newCar.save();
  }

  public async getCarById(id) {
    let carId = Number(id);
    let car = await this.carModel.findOne({ id: carId });
    if (!car) {
      throw new HttpException('Not found!!!', 404);
    }
    return car;
  }

  public async deleteCarById(id) {
    let car = await this.carModel.deleteOne({ id }).exec();
    if (car.deletedCount === 0) {
      throw new HttpException('Not found!!!', 404);
    }
    return car;
  }

  public async updateCarById(id: number, car: carDto) {
    let response = await this.carModel.findOneAndUpdate({ id }, car, {
      new: true,
    });
    return response;
  }
}
