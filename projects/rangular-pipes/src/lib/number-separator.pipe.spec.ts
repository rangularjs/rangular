import {NumberSeparatorPipe} from './number-separator.pipe';

describe('NumberSeparatorPipe', () => {

  let pipe: NumberSeparatorPipe;

  beforeEach(() => {
    pipe = new NumberSeparatorPipe();
  });

  it('should format value by comma', () => {
    const result = pipe.transform(123456789);

    expect(result).toEqual('123,456,789');
  });

  it('should format value by custom separator', () => {
    const result = pipe.transform(123456789, '،');

    expect(result).toEqual('123،456،789');
  });
});
