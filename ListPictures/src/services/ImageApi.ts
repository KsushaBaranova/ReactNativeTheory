import {ImageApiInterface, PhotoDataResponse} from '../interfaces/interfaces';

const baseUrl = 'https://api.unsplash.com';
const photos = '/photos';
const accessToken = 'BR5DLUKnMWnxGaaDg7HRp_xq3rbow6tHxFvyiuNp-TA';

export class ImageApi<T> implements ImageApiInterface<T> {
  private async init(
    path: string = photos,
    method: string = 'GET',
  ): Promise<Response> {
    return fetch(baseUrl + path, {
      method: method,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  private async auth(id: string, method: string): Promise<Response> {
    return fetch(`${baseUrl}/photos/${id}/like`, {
      method: method,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  async fetchPhotos(): Promise<Array<T>> {
    return this.init()
      .then(response => response.json())
      .then(data => {
        return data as T[];
      });
  }

  async likePhoto(id: string): Promise<T> {
    console.log(id);
    return this.init(`${photos}/${id}/like`, 'POST')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        return data as T;
      });
  }

  async unlikePhoto(id: string): Promise<T> {
    console.log(id);
    return this.init(`${photos}/${id}/like`, 'DELETE')
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        return data as T;
      });
  }
}

export const imageApi = new ImageApi<PhotoDataResponse>();
