
/* IMPORT */

import {describe} from 'ava-spec';
import {isLight} from '../../dist';

/* IS LIGHT */

describe ( 'isLight', it => {

  it ( 'checks if the provided color is a light color', t => {

    const tests = [
      ['#000000', false],
      ['#8a8a8a', false],
      ['#bbbbbb', false],
      ['#ffcc00', true],
      ['#e0e0e0', true],
      ['#ffffff', true]
    ];

    tests.forEach ( ([ color, output ]) => {
      t.is ( isLight ( color ), output );
    });

  });

});
