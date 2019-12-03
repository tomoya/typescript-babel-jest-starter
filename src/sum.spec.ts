import { sum } from '../src/sum';


describe(('sum method'), () => {
  it('returns 2', () => {
    expect(sum(1, 1)).toBe(2);
  });
});
