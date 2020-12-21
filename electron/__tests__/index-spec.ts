import * as index from '../src/index';

test('Should have Electron available', () => {
  expect(index.Electron).toBeTruthy();
});
