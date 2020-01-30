
/* IMPORT */

import {describe} from 'ava-spec';
import {luminance} from '../../dist';

/* LUMINANCE */

describe ( 'luminance', it => {

  it ( 'works', t => {

    const tests = [
      ['#000000', 0],
      ['#8a8a8a', .2541520943],
      ['#bbbbbb', .4969329951],
      ['#ffcc00', .6444573127],
      ['#e0e0e0', .7454042095],
      ['#ffffff', 1]
    ];

    tests.forEach ( ([ color, expected ]) => {
      t.is ( luminance ( color ), expected );
    });

  });

});
