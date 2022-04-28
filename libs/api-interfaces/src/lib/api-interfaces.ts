import { ApiProperty } from '@nestjs/swagger';

export class Message {
  @ApiProperty({
    example: 'A example message',
    description: 'The message we need to send',
  })
  message: string;
}
