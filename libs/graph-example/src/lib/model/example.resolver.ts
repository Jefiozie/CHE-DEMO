import { FakeItService } from '@demo-che/fake-it';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Example, User } from './example.model';

@Resolver(() => Example)
export class ExampleResolver {
  constructor(private readonly fakeService: FakeItService) {}
  @Query(() => Example)
  async example(): Promise<Example> {
    return { description: 'Example description', id: '1' };
  }

  @Query(() => User)
  async user(@Args('id') id: string): Promise<User> {
    console.error(id);
    const user = this.fakeService.getRandomUser();
    console.error(user);
    return { id, ...user };
  }
  @Query(() => [User])
  async users(): Promise<User[]> {
    const users = this.fakeService.getRandomUsers(10) as User[];
    console.error(users);
    return users;
  }
}
