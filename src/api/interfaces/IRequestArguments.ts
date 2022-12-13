import { RequestMethods } from '../apiServices/apiService';

export default interface IRequestArgument {
  apiUrl: string;
  endpoint: string;
  type?: RequestMethods;
  query?: {
    [key: string]: string | number;
  };
  body?: {
    [key: string]: string;
  };
}
