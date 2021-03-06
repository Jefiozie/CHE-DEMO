import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ExampleResolver } from './model/example.resolver';
import { FakeItModule } from '@demo-che/fake-it';

@Module({
  imports: [
    FakeItModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
      installSubscriptionHandlers: true,
    }),
  ],
  providers: [ExampleResolver],
})
export class GraphExampleModule {}
