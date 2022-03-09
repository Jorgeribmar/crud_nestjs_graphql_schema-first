import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ChocolateService } from './chocolate.service';
import { AddChocolateInput } from './dto/add-chocolate.input';
import { UpdateChocolateInput } from './dto/update-chocolate.input';
// import { Chocolate } from './entities/chocolate.entity';

@Resolver()
export class ChocolatesResolver {
  constructor(private readonly chocolateService: ChocolateService) {}

  @Query('getChocolates')
  async getChocolates() {
    const chocolates = await this.chocolateService.getChocolates();
    return chocolates;
  }

  @Query('getChocolate')
  async getChocolate(@Args('id') id: string) {
    const chocolates = await this.chocolateService.getChocolate(id);
    return chocolates;
  }

  @Mutation('addChocolate')
  async addChocolate(@Args('input') input: AddChocolateInput) {
    const addChocolate = await this.chocolateService.addChocolate(input);
    console.log(addChocolate);

    return addChocolate;
  }

  @Mutation('updateChocolate')
  async updateChocolate(@Args('input') input: UpdateChocolateInput) {
    const updateChocolate = await this.chocolateService.updateChocolate(input);
    return updateChocolate;
  }

  @Mutation('deleteChocolate')
  async deleteChocolate(@Args('id') id: string) {
    const deleteChocolate = await this.chocolateService.deleteChocolate(id);
    return deleteChocolate;
  }

  @Mutation('deleteAllChocolate')
  async deleteAllChocolate() {
    const deleteAllChocolate = await this.chocolateService.deleteAllChocolate();
    return deleteAllChocolate;
  }
}
