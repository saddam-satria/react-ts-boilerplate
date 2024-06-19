import { AxiosError, AxiosHeaders, AxiosResponse } from 'axios';
import axios from '@/configs/axios';
import HttpFactory from './httpFactory';
import { APIResponse } from '@/interfaces/Response';

type PostType = 'POST' | 'UPDATE';

/**
 * T = Data Request
 *
 * D = Data Response
 *
 * postType = POST | UPDATE
 * @returns APIResponse | Error
 */
const httpPost = async <T, D>(endpoint: string, data: T, headers: AxiosHeaders, postType: PostType): Promise<AxiosResponse | Error> => {
  try {
    if (postType === 'POST')
      return axios.put<APIResponse<T>>(endpoint, data, {
        headers: headers,
      });

    return await axios.post<APIResponse<T>>(endpoint, data, {
      headers: headers,
    });
  } catch (error: any) {
    const throwError = error as AxiosError<APIResponse<D>>;
    const statusCode = throwError.response!.statusText;

    const httpFactory = HttpFactory(parseInt(statusCode));

    throw httpFactory;
  }
};

export default httpPost;
