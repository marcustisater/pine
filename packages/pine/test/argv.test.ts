const { parseArgv } = require('../src/argv');

describe('argv', () => {
  it('should parse argv', () => {
    const out = parseArgv([1, 2, '--flag']);

    expect(out.flag).toBeTruthy();
    expect(out.get(0)).toBe(1);
    expect(out.get(1)).toBe(2);
  });
});