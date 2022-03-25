import { ConfigService } from '@nestjs/config';

export class AddChocolateInput {
  constructor(private configService: ConfigService) {}
  title: string;
  description: string;
}
