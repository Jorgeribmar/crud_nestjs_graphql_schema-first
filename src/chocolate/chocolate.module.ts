import { Module } from '@nestjs/common';
import { ChocolateService } from './chocolate.service';
import { ChocolatesResolver } from './chocolate.resolver';

@Module({
  providers: [ChocolatesResolver, ChocolateService],
})
export class ChocolateModule {}
