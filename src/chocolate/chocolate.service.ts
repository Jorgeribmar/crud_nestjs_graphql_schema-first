import { HttpException, Injectable } from '@nestjs/common';
import { AddChocolateInput } from './dto/add-chocolate.input';
import { UpdateChocolateInput } from './dto/update-chocolate.input';
import { Chocolate } from './entities/chocolate.entity';
import { CHOCOLATES } from './mocks/chocolates.mocks';

@Injectable()
export class ChocolateService {
  chocolates = CHOCOLATES;

  getChocolates(): Chocolate[] {
    return this.chocolates;
  }

  getChocolate(id: string): Chocolate {
    return this.chocolates.find((choco) => choco.id === id);
  }

  async addChocolate(input: AddChocolateInput): Promise<Chocolate[]> {
    const lastChoco = this.chocolates.slice(-1).pop();
    const chocolate: Chocolate = {
      id: (Number(lastChoco.id) + 1).toString(),
      title: input.title,
      description: input.description,
      completed: false,
    };
    this.chocolates.push(chocolate);
    return this.chocolates;
  }

  updateChocolate({ id, completed }: UpdateChocolateInput): Chocolate {
    const chocoIndex = this.chocolates.findIndex((choco) => choco.id === id);

    if (chocoIndex === -1) {
      throw new HttpException('Choco not found', 404);
    }

    this.chocolates[chocoIndex].completed = completed;
    return this.chocolates[chocoIndex];
  }

  deleteChocolate(id: string): Chocolate[] {
    const chocoIndex = this.chocolates.findIndex((choco) => choco.id === id);
    if (chocoIndex === -1) {
      throw new HttpException('Choco not found', 404);
    }

    this.chocolates.splice(chocoIndex, 1);
    return this.chocolates;
  }
}
