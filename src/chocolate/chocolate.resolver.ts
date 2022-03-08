import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ChocolateService } from './chocolate.service';
import { AddChocolateInput } from './dto/add-chocolate.input';
import { UpdateChocolateInput } from './dto/update-chocolate.input';
import { Chocolate } from './entities/chocolate.entity';

@Resolver('Chocolates')
export class ChocolatesResolver {
  constructor(private readonly chocolateService: ChocolateService) {}

  @Query(() => [Chocolate])
  getChocolates() {
    return this.chocolateService.getChocolates();
  }

  @Query(() => Chocolate)
  async getChocolate(@Args('id') id: string) {
    return this.chocolateService.getChocolate(id);
  }

  @Mutation(() => [Chocolate])
  async addChocolate(@Args('input') input: AddChocolateInput) {
    return this.chocolateService.addChocolate(input);
  }

  @Mutation(() => Chocolate)
  async updateChocolate(@Args('input') input: UpdateChocolateInput) {
    return this.chocolateService.updateChocolate(input);
  }

  @Mutation(() => [Chocolate])
  deleteChocolate(@Args('id') id: string) {
    return this.chocolateService.deleteChocolate(id);
  }
}
