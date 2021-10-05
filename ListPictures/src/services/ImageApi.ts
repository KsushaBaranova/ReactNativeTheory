import {ImageApiInterface} from '../interfaces/interfaces';
import {PhotoDataResponse, SearchDataResponse} from '../interfaces/types';
import {request, RequestType} from './ApiManager';

class ImageApi<T> implements ImageApiInterface<T> {
  private token: string = 'BR5DLUKnMWnxGaaDg7HRp_xq3rbow6tHxFvyiuNp-TA';

  async fetchPhotos(orderBy: object): Promise<Array<T>> {
    return request<Array<T>>(RequestType.fetchPhotos, {
      token: this.token,
      urlParams: orderBy,
    });
  }

  async likePhoto(userID: string[]): Promise<T> {
    return request<T>(RequestType.likePhoto, {
      token: this.token,
      params: userID,
    });
  }

  async unlikePhoto(userID: string[]): Promise<T> {
    return request<T>(RequestType.unlikePhoto, {
      token: this.token,
      params: userID,
    });
  }

  async searchPhotos(query: object): Promise<T> {
    return request<T>(RequestType.searchPhotos, {
      token: this.token,
      urlParams: query,
    });
  }
}

export const imageApi = new ImageApi<PhotoDataResponse>();
export const searchApi = new ImageApi<SearchDataResponse>();
