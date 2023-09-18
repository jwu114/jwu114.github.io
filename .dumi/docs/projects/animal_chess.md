---
title: Animal Chess
toc: content
order: 2
---

```tsx
/**
 * inline: true
 */

import React from 'react';
import IntroBox from '../../src/IntroBox/index';

export default () =>
<div style={{marginBottom: '50px'}}> 
    <IntroBox text='It is an animal checker game I made using Java in 2020. Graphic User Interface and code were both finished by myself. I referenced the icons from Roco Kingdom, a Chinese MMORPG.'/>
</div>
```

### Game Rule

```tsx
/**
 * inline: true
 */

import React from 'react';

export default () =>
<div style={{marginTop: '30px', marginBottom: '90px', marginLeft: '30px'}}> 
    <p>
    In the game, there is a 4 x 4 chess board with 16 covered checkers. Players need to uncover checkers and eat all checkers of the opponent to win the game. Two players move alternatively. In each turn, they have 30 seconds to consider.
    </p>
    <p>
    Each player has 8 animal checkers: Elephant, Lion, Tiger, Leopard, Wolf, Dog, Cat, Rat. In usual, the relationship between animals is: Elephant &gt; Lion &gt; Tiger &gt; Leopard &gt; Wolf &gt; Dog &gt; Cat &gt; Rat. Animals on the left of the greater-than sign can eat all animals on the right. For example, dog can eat cat and rat when meeting. An exception is: when the rat and the elephant meets, the rat will eat the elephant.
    </p>
    <p>
    Magma will spread after 20 turns, that can eat any checker. To avoid the negative competition, if no chekcer is eaten in 10 turns, magma will immediately begin spreading.
    </p>
</div>
```

### Demo

```tsx
/**
 * inline: true
 */

import React from 'react';

export default () =>
<div style={{marginTop: '30px', marginBottom: '90px', textAlign: 'center'}}> 
    <video width="50%" height="50%" controls >
      <source src='/animalchess/demo.mp4' type="video/mp4"/>
    </video>
</div>
```
### Techniques

```tsx
/**
 * inline: true
 */

import React from 'react';

export default () =>
<div style={{marginBottom: '30px', marginLeft: '30px'}}> 
    <p>Language - <b>Java</b></p>
    <p>GUI Toolkit - <b>AWT, Swing</b></p>
</div>
```
