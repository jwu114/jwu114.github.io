import React from 'react';
import './index.less';

export default ({ src, alt, width, title }: { src: string, alt: string, width: string, title: string }) =>
  <div className='feature'>
    <img src={src} alt={alt} width={width}/>
    <p> {title} </p>
  </div>