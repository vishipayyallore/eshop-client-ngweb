import { CdnPipe } from './cdn.pipe'


describe('CdnPipe', () => {
  it('create an instance', () => {
    // TODO add cdn service
    const pipe = new CdnPipe({cdnHost:''})
    expect(pipe).toBeTruthy()
  });
});
