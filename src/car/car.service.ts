import { HttpException, Injectable } from '@nestjs/common';
import { CARS } from './cars.mock';

@Injectable()
export class CarService {
  private cars = CARS;
  public getCars() {
    return this.cars;
  }

  public addCar(car) {
    this.cars.push(car);
    return this.cars;
  }

  public getCarById(id) {
    let carId = Number(id);
    let car = this.cars.find((car) => car.id === carId);
    if (!car) {
      throw new HttpException('Not found!!!', 404);
    }
    return car;
  }

  public deleteCarById(id) {
    let index = this.cars.findIndex((car) => car.id == id);
    this.cars.splice(index, 1);
    return this.cars;
  }

  public updateCarById(id, car) {
    let index = this.cars.findIndex((car) => car.id == id);
    this.cars[index] = car;
    return this.cars[index];
  }
}
