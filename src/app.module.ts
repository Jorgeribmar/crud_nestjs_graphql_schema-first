import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ChocolateModule } from './chocolate/chocolate.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost:27017/crud_nestjs_graphql_schema-first',
    ),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
    }),
    ChocolateModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
