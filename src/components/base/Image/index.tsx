import * as React from 'react';

const widthDefault = 20;
const altDefault = 'icon image';

export interface IFlagImage {
  iconCode: string;
  apiUrl: string;
  width?: number;
  altText?: string;
  qualityParam?: string;
}

const Image = (props: IFlagImage): JSX.Element => {
  const { apiUrl, iconCode, width, altText, qualityParam } = props;

  return (
    <img
      loading="lazy"
      width={width ?? widthDefault}
      src={`${apiUrl}${iconCode?.toLowerCase()}${qualityParam ? qualityParam : ''}.png`}
      srcSet={`${apiUrl}${iconCode?.toLowerCase()}${qualityParam ? qualityParam : ''}.png 2x`}
      alt={altText ?? altDefault}
      style={{ padding: '3px' }}
    />
  );
};

export default Image;
