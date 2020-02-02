
/* IMPORT */

import {describe} from 'ava-spec';
import {invert} from '../../dist';

/* INVERT */

describe ( 'invert', it => {

  it ( 'gets the inverse of the color', t => {

    const tests = [
      [['#b37399'], '#4c8c66'],
      [['black'], '#ffffff'],
      [['#550e0c', 20 ], '#663b3a']
    ];

    tests.forEach ( ([ args, output ]) => {
      t.is ( invert ( ...args ), output );
    });

  });

});
