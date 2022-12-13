import IRequestArgument from '../interfaces/IRequestArguments';

export const callApi = async (args: IRequestArgument): Promise<Response> => {
  const result: Response = await fetch(createRequest(args));

  if (!result.ok) {
    const resultJSON = await result.json();
    throw new Error(resultJSON.error.message); // TODO add new syntax ?.
  }

  return result;
};

const createRequest = (args: IRequestArgument): Request => {
  return new Request(getURL(args), {
    method: args.type,
  });
};

const getURL = (args: IRequestArgument): string => {
  const queryStr = args.query ? `?${new URLSearchParams(Object.assign(args.query)).toString()}` : '';
  return `${args.apiUrl}${args.endpoint}${queryStr}`;
};
