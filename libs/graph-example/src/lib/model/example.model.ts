import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'example ' })
export class Example {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  description?: string;
}

@ObjectType({ description: 'user' })
export class User {
  @Field(() => ID)
  id: string;
  @Field({ nullable: true })
  name: string;
  @Field({ nullable: true })
  email: string;
  @Field({ nullable: true })
  website: string;
  @Field({ nullable: true })
  address: string;
  @Field({ nullable: true })
  bio: string;
  @Field({ nullable: true })
  image: string;
}
