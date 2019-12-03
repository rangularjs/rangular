import {JalaliPipe} from './jalali.pipe';

describe('JalaliPipe', () => {

  let jalaliPipe: JalaliPipe;

  beforeEach(() => {
    jalaliPipe = new JalaliPipe();
  });

  it('create an instance', () => {
    expect(jalaliPipe).toBeTruthy();
  });

  it('Should return jalali date', () => {
    const result = jalaliPipe.transform('2018-07-21T11:04:17.722+04:30');
    expect(result).toEqual('1397/04/30 11:04:17');
  });
});
