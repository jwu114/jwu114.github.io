import React from 'react';
import './index.less';

export default ({ src, alt, width }: { src: string, alt: string, width: string }) =>
  <img className='darkable-img' src={src} alt={alt} width={width}/>;