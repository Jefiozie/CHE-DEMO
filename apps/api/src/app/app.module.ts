import { GraphExampleModule } from '@demo-che/graph-example';
import { FakeItModule } from '@demo-che/fake-it';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [FakeItModule, GraphExampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
