import { Module } from '@nestjs/common';
import { ChocolateService } from './chocolate.service';
import { ChocolatesResolver } from './chocolate.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ChocolateSchema } from './model/chocolates.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Chocolate', schema: ChocolateSchema }]),
    MongooseModule.forRoot(
      'mongodb://localhost:27017/crud_nestjs_graphql_schema-first',
    ),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
    }),
    ChocolateModule,
  ],
  providers: [ChocolatesResolver, ChocolateService],
})
export class ChocolateModule {}
