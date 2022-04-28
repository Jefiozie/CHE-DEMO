import { Message } from '@demo-che/api-interfaces';
import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
}
