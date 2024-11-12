import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MessageService {
  private readonly apiUrl = 'http://localhost:4567/spaces/1/messages';

  async deleteMessage(messageId: number): Promise<any> {
    try {
      const response = await axios.delete(`${this.apiUrl}/${messageId}`);
      return response.data;  // Retorna os dados de resposta da requisição
    } catch (error) {
      throw new Error(`Error deleting message with ID ${messageId}: ${error.message}`);
    }
  }
}
