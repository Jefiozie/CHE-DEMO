import { FakeItService } from '@demo-che/fake-it';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Example, User } from './example.model';

const pubSub = new PubSub();

@Resolver(() => Example)
export class ExampleResolver {
  constructor(private readonly fakeService: FakeItService) {}
  @Query(() => Example)
  async example(): Promise<Example> {
    return { description: 'Example description', id: '1' };
  }

  @Query(() => User)
  async user(@Args('id') id: string): Promise<User> {
    const user = this.fakeService.getRandomUser();
    return { id, ...user };
  }
  @Query(() => [User])
  async users(): Promise<User[]> {
    const users = this.fakeService.getRandomUsers(10) as User[];
    return users;
  }

  @Mutation(() => User)
  async addUser(@Args('name') name: string): Promise<User> {
    const user = this.fakeService.getRandomUser();
    pubSub.publish('userAdded', { userAdded: { ...user, name } });
    return { ...user, name };
  }

  @Subscription(() => User)
  userAdded() {
    return pubSub.asyncIterator('userAdded');
  }
}
