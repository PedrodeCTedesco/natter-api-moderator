import { Controller, Delete, Param } from '@nestjs/common';
import { MessageService } from './messages.service';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Delete(':id')
  async deleteMessage(@Param('id') id: string) {
    const messageId = parseInt(id);
    return this.messageService.deleteMessage(messageId);
  }
}
