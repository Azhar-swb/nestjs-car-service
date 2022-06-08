import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CarService } from './car.service';
import { carDto } from './car.dto';

@Controller('car')
export class CarController {
  constructor(private carService: CarService) {}

  @Get()
  public getCars() {
    return this.carService.getCars();
  }

  @Get(':id')
  public getCarById(@Param('id') id: number) {
    return this.carService.getCarById(id);
  }

  @Post()
  public postCar(@Body() car: carDto) {
    return this.carService.addCar(car);
  }

  @Delete(':id')
  public deleteCarById(@Param('id') id: number) {
    return this.carService.deleteCarById(id);
  }

  @Put(':id')
  public updateCarById(@Param('id') id: number, @Body() car: carDto) {
    return this.carService.updateCarById(id, car);
  }
}
