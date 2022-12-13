import IRequestArgument from '../interfaces/IRequestArguments';
import IWeather from '../../interfaces/IWeather';
import * as apiHelper from './apiHelper';

export enum RequestMethods {
  GET = 'GET',
}

export const getRequest = async (args: IRequestArgument): Promise<IWeather> => {
  console.log(args);
  const apiArguments: IRequestArgument = {
    ...args,
    type: RequestMethods.GET,
  };
  return await getResponse(apiArguments);
};

const getResponse = async (apiArguments: IRequestArgument): Promise<IWeather> => {
  const response: Response = await apiHelper.callApi(apiArguments);
  return await response.json();
};
