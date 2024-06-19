import { AxiosError, AxiosHeaders, AxiosResponse } from 'axios';
import axios from '@/configs/axios';
import HttpFactory from './httpFactory';
import { APIResponse } from '@/interfaces/Response';

type Type = 'GET' | 'DELETE';

/**
 * T = Data Response
 *
 * Type = GET | DELETE
 * @returns APIResponse | Error
 */
const httpPost = async <T>(endpoint: string, headers: AxiosHeaders, getType: Type = 'GET'): Promise<AxiosResponse | Error> => {
  try {
    if (getType === 'DELETE') return axios.delete<APIResponse<T>>(endpoint, { headers });

    return await axios.get<APIResponse<T>>(endpoint, {
      headers: headers,
    });
  } catch (error: any) {
    const throwError = error as AxiosError<APIResponse<T>>;
    const statusCode = throwError.response!.statusText;

    const httpFactory = HttpFactory(parseInt(statusCode));

    throw httpFactory;
  }
};

export default httpPost;
