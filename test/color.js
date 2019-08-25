
/* IMPORT */

import {describe} from 'ava-spec';
import Color from '../dist/color';
import Hex from '../dist/color/hex';

/* COLOR */

describe ( 'Color', it => {

  it ( 'expects supported colors', t => {

    const tests = [
      'foo'
    ];

    tests.forEach ( color => {
      t.throws ( () => Color.parse ( color ) );
    });

  });

  it ( 'supports keywords', t => {

    const tests = [
      ['#ffffff', '#ffffff'],
      ['BLACK', '#000000'],
      ['white', '#ffffff'],
    ];

    tests.forEach ( ([ keyword, result ]) => {
      t.is ( Hex.output ( Color.parse ( keyword ) ), result );
    });

  });

  it ( 'supports hex decimal', t => {

    const tests = [
      ['#fc0', '#ffcc00'],
      ['#fc0c', '#ffcc00cc'],
      ['#ffffff', '#ffffff'],
      ['#ffcc00cc', '#ffcc00cc']
    ];

    tests.forEach ( ([ keyword, result ]) => {
      t.is ( Hex.output ( Color.parse ( keyword ) ), result );
    });

  });

});
