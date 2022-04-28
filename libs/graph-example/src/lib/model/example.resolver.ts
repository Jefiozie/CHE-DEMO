import { Query, Resolver } from '@nestjs/graphql';
import { Example } from './example.model';

@Resolver(() => Example)
export class ExampleResolver {
  @Query(() => Example)
  async example(): Promise<Example> {
    return { description: 'Example description', id: '1' };
  }
}
