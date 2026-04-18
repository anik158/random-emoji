import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class EmojiValidationPipe implements PipeTransform {
  transform(value: any) {
    if(!value) {
      return;
    }

    if(isNaN(value)) {
      throw new BadRequestException(`Validation failed. ${value} is not a number.'`);
    }

    if(value < 0 || value > 9) {
      throw new BadRequestException(`Validation failed. ${value} is not within valid range.`);
    }

    console.log(`EmojiValidationPipe: Valid index received: ${value}`);
    return value;
  }
}
