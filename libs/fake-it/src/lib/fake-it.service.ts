import { User } from '@demo-che/api-interfaces';
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
      name: faker.name.findName(),
      email: faker.internet.email(),
      website: faker.internet.url(),
      address:
        faker.address.streetAddress() +
        faker.address.city() +
        faker.address.country(),
      bio: faker.lorem.sentences(),
      image: faker.image.avatar(),
    };
  }
  getRandomUsers(amount: number) {
    console.error(amount);
    const users: unknown[] = [];
    console.error(amount);
    for (let i = 0; i < amount; i++) {
      users.push(this.getRandomUser());
    }
    return users;
  }
}
