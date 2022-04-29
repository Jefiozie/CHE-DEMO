import { Message, User } from '@demo-che/api-interfaces';
import { FakeItService } from '@demo-che/fake-it';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly fakeService: FakeItService
  ) {}

  @ApiTags('demo')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Message,
  })
  @ApiResponse({
    status: 400,
    description: 'The record was not found',
  })
  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @ApiTags('demo')
  @ApiResponse({
    status: 200,
    description: 'The found records',
    isArray: true,
    type: User,
  })
  @ApiResponse({
    status: 400,
    description: 'The records where not found',
  })
  @Get('users')
  findMany() {
    const users = this.fakeService.getRandomUsers(10) as User[];
    console.error(users);
    return users;
  }

  @ApiTags('demo')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: User,
  })
  @ApiResponse({
    status: 400,
    description: 'The record was not found',
  })
  @Get('users/:id')
  findOne(@Param('id') id: number) {
    console.error(id);
    const user = this.fakeService.getRandomUser();
    console.error(user);
    return { id, ...user };
  }
}
