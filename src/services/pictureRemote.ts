import BaseAxios from './baseAxios';

class PictureRemote extends BaseAxios {
  constructor() {
    super({
      baseURL: 'http://localhost:8001/api',
    });
  }
}
export default PictureRemote;
