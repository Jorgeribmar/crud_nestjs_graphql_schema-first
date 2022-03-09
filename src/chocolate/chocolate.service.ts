import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AddChocolateInput } from './dto/add-chocolate.input';
import { UpdateChocolateInput } from './dto/update-chocolate.input';
import { Chocolate } from './model/chocolates.model';
import { Model } from 'mongoose';

// import { Chocolate } from './entities/chocolate.entity';
// import { CHOCOLATES } from './model/chocolates.model';

@Injectable()
export class ChocolateService {
  constructor(
    @InjectModel('Chocolate') private readonly chocolateModel: Model<Chocolate>,
  ) {}

  async getChocolates() {
    const chocolates = await this.chocolateModel.find();
    console.log('getAll', chocolates);

    return chocolates;
  }

  async getChocolate(id: string) {
    const chocolate = await this.chocolateModel.findById(id);
    if (!chocolate) {
      throw new NotFoundException('No chocolate with this ID');
    }
    console.log('getOne', chocolate);

    return chocolate;
  }

  async addChocolate(input: AddChocolateInput) {
    const newChocolate = new this.chocolateModel(input);
    const addChocolate = await newChocolate.save();
    // console.log('Add', addChocolate);

    return addChocolate;
  }

  async updateChocolate({ id, completed }: UpdateChocolateInput) {
    const updateChocolate = await this.chocolateModel.findById(id);
    if (!updateChocolate) {
      throw new NotFoundException('No chocolate with this ID');
    }
    if (completed) {
      updateChocolate.completed = completed;
    }
    updateChocolate.save();
    console.log('Update', updateChocolate);

    return updateChocolate;
    // const chocoIndex = this.chocolates.findIndex(
    //   (chocolate) => chocolate.id === id,
    // );

    // if (chocoIndex === -1) {
    //   throw new HttpException('Chocolate not found', 404);
    // }

    // this.chocolates[chocoIndex].completed = completed;
    // return this.chocolates[chocoIndex];
  }

  async deleteChocolate(id: string) {
    const deleteChocolate = await this.chocolateModel.findByIdAndDelete(id);
    if (!deleteChocolate) {
      throw new NotFoundException('Chocolate not found with this ID');
    }
    console.log('delete', deleteChocolate);

    return deleteChocolate;
  }

  async deleteAllChocolate() {
    const deleteAllChocolate = await this.chocolateModel.deleteMany();
    if (deleteAllChocolate.deletedCount === 0) {
      throw new NotFoundException('Nothing to delete');
    }
    console.log(deleteAllChocolate);
    return deleteAllChocolate;
  }
}
