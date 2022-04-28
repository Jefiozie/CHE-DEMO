import { Module } from '@nestjs/common';
import { FakeItService } from './fake-it.service';

@Module({
  controllers: [],
  providers: [FakeItService],
  exports: [FakeItService],
})
export class FakeItModule {}
