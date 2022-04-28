import { GraphExampleModule } from '@demo-che/graph-example';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [GraphExampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
