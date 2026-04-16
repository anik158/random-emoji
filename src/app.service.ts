import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getEmoji( index?: number): string {

    const emojis = this.getEmojis();
    console.log(`AppService: getEmoji called with index: ${index}`);
    const randomIndex = index || Math.floor(Math.random()*emojis.length);
    return emojis[randomIndex];
  }
    
  getEmojis(): string[] {
    return ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇'];
  }
}
