
/* LANG */

const Lang = {

  clamp: ( number: number, lower: number, upper: number ): number => {

    if ( lower > upper ) return Lang.clamp ( number, upper, lower );

    return Math.min ( upper, Math.max ( lower, number ) );

  },

  round: ( number: number ): number => { // 10 digits rounding

    return Math.round ( number * 10000000000 ) / 10000000000;

  }

};

/* EXPORT */

export default Lang;
