import { ConfigService } from '@nestjs/config';

export class UpdateChocolateInput {
  constructor(private configService: ConfigService) {}
  id: string;
  completed: boolean;
}
