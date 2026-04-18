import { EmojiValidationPipe } from './emoji-validation.pipe';

describe('EmojiValidationPipe', () => {
  const emojiPipe  = new EmojiValidationPipe();
  it('should be defined', () => {
    expect(emojiPipe).toBeDefined();
  });

  it(`should return undefined if value is not provided`, () => {
    expect(emojiPipe.transform(undefined)).toBeUndefined();
  });

  it(`should throw BadRequestException if value is not a number`, () => {
    expect(() => emojiPipe.transform('abc')).toThrow('Validation failed. abc is not a number.');
  });

  it(`should throw BadRequestException if value is less than 0`, () => {
    expect(() => emojiPipe.transform(-1)).toThrow('Validation failed. -1 is not within valid range.');
  });

  it(`should throw BadRequestException if value is greater than 9`, () => {
    expect(() => emojiPipe.transform(10)).toThrow('Validation failed. 10 is not within valid range.');
  });

  it(`should return the value if it is a valid number within range`, () => {
    expect(emojiPipe.transform(5)).toBe(5);
  });
});
