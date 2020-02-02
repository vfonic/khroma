
/* IMPORT */

import {describe} from 'ava-spec';
import {desaturate} from '../../dist';

/* DESATURATE */

describe ( 'desaturate', it => {

  it ( 'decreases the saturation channel of the color', t => {

    const tests = [T
      [['hsl(0, 100%, 50%)', 0], 'hsl(0, 100%, 50%)'],
      [['hsl(0, 100%, 50%)', 50], 'hsl(0, 50%, 50%)'],
      [['hsl(0, 100%, 50%)', 75], 'hsl(0, 25%, 50%)'],
      [['hsl(0, 100%, 50%)', 100], 'hsl(0, 0%, 50%)'],
      [['hsl(0, 50%, 50%)', 100], 'hsl(0, 0%, 50%)'],
      [['hsl(0, 0%, 50%)', 100], 'hsl(0, 0%, 50%)']
    ];

    tests.forEach ( ([ args, output ]) => {
      t.is ( desaturate ( ...args ), output );
    });

  });

});
