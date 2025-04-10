import { axiosClassic, instance } from '@/api/instance';
import { IPicture, IPictureDto } from '@/types/picture.types';

class PictureService {
  private BASE_URL = 'picture';

  getAll() {
    return axiosClassic.get<IPicture[]>(this.BASE_URL);
  }

  getPictures() {
    return axiosClassic.get(`${this.BASE_URL}/profile`);
  }

  processPicture(dto: IPictureDto) {
    return instance.post(`${this.BASE_URL}/process`, dto);
  }
}

export const pictureService = new PictureService();
