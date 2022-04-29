import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FakeItService {
  getRandomNames(amount = 1) {
    // generate random users based on amount
    const names: string[] = [];
    for (let i = 0; i < amount; i++) {
      names.push(faker.name.findName());
    }

    return names;
  }

  getRandomUser() {
    return {
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      website: faker.internet.url(),
      address:
        faker.address.streetAddress() +
        faker.address.city() +
        faker.address.country(),
      bio: faker.lorem.sentences(),
      image: faker.image.cats(200, 200, true),
    };
  }
  getRandomUsers(amount: number) {
    const users: unknown[] = [];
    for (let i = 0; i < amount; i++) {
      users.push(this.getRandomUser());
    }
    return users;
  }
}
