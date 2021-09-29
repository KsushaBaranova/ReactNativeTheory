const baseUrl = 'https://api.unsplash.com';
const photos = '/photos';
const like = '/like';
const clientId = 'L7_7oGGDGRmzsjZDIwunMqkRPtpoIJE6-rcE_vrSFO0';
const accessToken = 'BR5DLUKnMWnxGaaDg7HRp_xq3rbow6tHxFvyiuNp-TA';

export interface ImageApiInterface<T> {
  fetchPhotos(): Promise<Array<T>>;
}

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

  async fetchPhotos(): Promise<Array<T>> {
    return this.init()
      .then(response => response.json())
      .then(data => {
        return data as T[];
      });
  }

  async likePhoto(id: string): Promise<T> {
    return this.init(photos + '/' + id + '/' + like, 'POST')
      .then(response => response.json())
      .then(data => {
        return data as T;
      });
  }

  async unlikePhoto(id: string): Promise<T> {
    return this.init(photos + '/' + id + '/' + like, 'DELETE')
      .then(response => response.json())
      .then(data => {
        return data as T;
      });
  }
}

export type PhotoDataResponse = {
  id: string;
  liked_by_user: boolean;
  likes: number;
  user?: {name: string; profile_image?: {small?: string}};
  urls?: {small: string};
};
