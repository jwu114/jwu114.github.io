---
title: AI Reversi 
toc: content
order: 6
---

```tsx
/**
 * inline: true
 */

import React from 'react';
import IntroBox from '../../src/IntroBox/index';

export default () =>
<div> 
    <IntroBox text='It is a text-based AI reversi game developed by other two students and I in the Introduction to Artificial Intelligence course in 2022 Fall. The core algorithm we used is minimax with alpha-beta pruning and heuristic evaluation function.'/>
</div>
```

### Program Introduction

```tsx
/**
 * inline: true
 */

import React from 'react';

export default () =>
<div style={{marginTop: '30px', marginBottom: '90px', marginLeft: '30px'}}> 
    <p>
    In all constructed Reversi, X move first always and O move after X always. Players are able to choose to make move first or second by choosing X or O base on their own need.
    </p>
    <p>
    For Alpha-beta purning minimax, players are able to choose the target depth about the Ai_alogorithm that they want to play against (i.e. Difficulty)
    Please follow strictly about the guide in Commandline once game start and enter legal value for the best experience.
    </p>
</div>
```