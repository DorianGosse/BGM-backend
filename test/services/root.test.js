const app = require('../../src/app');

describe('\'root\' service', () => {
  it('registered the service', () => {
    const service = app.service('root');
    expect(service).toBeTruthy();
  });
});
