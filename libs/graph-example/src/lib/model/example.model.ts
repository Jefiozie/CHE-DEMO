import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'example ' })
export class Example {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  description?: string;
}
