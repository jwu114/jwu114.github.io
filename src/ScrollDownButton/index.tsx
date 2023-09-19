
import animateScrollTo from 'animated-scroll-to';
import React, { type FC } from 'react';
import './index.less';

const ScrollDownButton: FC<{ id: string }> = ({id}) => {  
    function scroll() {
      const elm = document.getElementById(id);
      if (elm) {
        animateScrollTo(elm.offsetTop - 120, {
          maxDuration: 5000,
          minDuration: 1000,
          speed: 2000,
        });
      } 
    }

    return (
        <div className='scroll-down-button'>
            <button onClick = {scroll}> 
                <img src='/portfolio/scrolldown_btn.png' width='25px' alt='button'/>
            </button>
        </div>
    );
}
export default ScrollDownButton;