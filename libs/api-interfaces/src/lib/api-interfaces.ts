import { faker } from '@faker-js/faker';
import { ApiProperty } from '@nestjs/swagger';

export class Message {
  @ApiProperty({
    example: 'A example message',
    description: 'The message we need to send',
  })
  message: string;
}

export class User {
  @ApiProperty({
    example: faker.name.findName(),
    description: 'The name of a user',
  })
  name: string;
  @ApiProperty({
    example: faker.internet.email(),
    description: 'The email of a user',
  })
  email: string;
  @ApiProperty({
    example: faker.internet.url(),
    description: 'The website from a user',
  })
  website: string;
  @ApiProperty({
    example:
      faker.address.streetAddress() +
      faker.address.city() +
      faker.address.country(),
    description: 'The address from a user',
  })
  address: string;
  @ApiProperty({
    example: faker.lorem.sentences(),
    description: 'The bio of a user',
  })
  bio: string;
  @ApiProperty({
    example: faker.image.avatar(),
    description: 'The image of a user',
  })
  image: string;
}
