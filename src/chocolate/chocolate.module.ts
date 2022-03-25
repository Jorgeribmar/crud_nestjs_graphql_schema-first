import { Module } from '@nestjs/common';
import { ChocolateService } from './chocolate.service';
import { ChocolatesResolver } from './chocolate.resolver';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ChocolateSchema } from './model/chocolates.model';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from 'config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    MongooseModule.forFeature([{ name: 'Chocolate', schema: ChocolateSchema }]),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        let opts: MongooseModuleOptions = {
          uri: configService.get<string>('database.url'),
          name: configService.get<string>('database.name'),
        };
        return opts;
      },
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
    }),
    ChocolateModule,
  ],
  providers: [ChocolatesResolver, ChocolateService],
})
export class ChocolateModule {}
