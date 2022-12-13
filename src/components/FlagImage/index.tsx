import * as React from 'react';

const URL_FLAG_API = 'https://flagcdn.com/w20/';
const widthDefault = 20;

export interface IFlagImage {
  countryCode: string;
  width?: number;
}

const FlagImage = (props: IFlagImage): JSX.Element => {
  const { countryCode, width } = props;

  return (
    <img
      loading="lazy"
      width={width || widthDefault}
      src={`${URL_FLAG_API}${countryCode?.toLowerCase()}.png`}
      srcSet={`${URL_FLAG_API}${countryCode?.toLowerCase()}.png 2x`}
      alt=""
      style={{ padding: '5px' }}
    />
  );
};

export default FlagImage;
