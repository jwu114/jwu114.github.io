import React from 'react';
import './index.less';

export default ({ href }: { href: string }) =>
  <div className='anchor-button'>
    <a href={href}>
      <img src='/portfolio/scrolldown_btn.png' width='25px' alt='button'/>
    </a>
  </div>
  