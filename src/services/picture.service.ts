import { axiosClassic } from '@/api/instance';

class PictureService {
  private BASE_URL = 'picture';

  getAll() {
    return axiosClassic.get(this.BASE_URL);
  }

  getPictures() {
    return axiosClassic.get(`this.BASE_URL/picture`);
  }
}

export const pictureService = new PictureService();
