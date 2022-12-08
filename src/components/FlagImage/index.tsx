import * as React from 'react';

const URL_FLAG_API = 'https://flagcdn.com/w20/';

export interface IFlagImage {
  countryCode: string;
}

const FlagImage = (props: IFlagImage) => {
  const { countryCode } = props;

  return (
    <img
      loading="lazy"
      width="20"
      src={`${URL_FLAG_API}${countryCode.toLowerCase()}.png`}
      srcSet={`${URL_FLAG_API}${countryCode.toLowerCase()}.png 2x`}
      alt=""
      style={{ padding: '5px' }}
    />
  );
};

export default FlagImage;
