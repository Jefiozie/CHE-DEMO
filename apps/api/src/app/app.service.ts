import { Injectable } from '@nestjs/common';
import { Message } from '@demo-che/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to the CHE api!' };
  }
}
