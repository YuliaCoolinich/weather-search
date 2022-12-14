import * as React from 'react';
import Image from '../base/Image';

const widthDefault = 20;
const altTextDefault = 'flag icon';

export interface IFlagImage {
  iconCode: string;
  width?: number;
  countryName?: string;
}

const FlagImage = (props: IFlagImage): JSX.Element => {
  const { iconCode, width, countryName } = props;
  const altText = countryName ? `${countryName} ${altTextDefault}` : altTextDefault;

  return (
    <>
      {iconCode ? (
        <Image
          iconCode={iconCode}
          width={width ?? widthDefault}
          apiUrl={process.env.REACT_APP_FLAG_API_URL}
          altText={altText}
        />
      ) : null}
    </>
  );
};

export default FlagImage;
