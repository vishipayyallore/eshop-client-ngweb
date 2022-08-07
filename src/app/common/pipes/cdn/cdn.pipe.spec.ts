import { CdnPipe } from './cdn.pipe'
import { CdnService } from './cdn.service';


describe('CdnPipe', () => {
  it('create an instance', () => {
    // TODO add cdn service
    const pipe = new CdnPipe({} as CdnService)
    expect(pipe).toBeTruthy()
  });
});
