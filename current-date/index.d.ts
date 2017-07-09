declare namespace currentdate {

  interface formatString {
    /**
     * if set, it logs on the console
     */
    output: boolean,
    /**
     * if set, it returns an ISO date string
     */
    toString: boolean
  }


  interface CurrentDate {
    /**
     *  output (boolean): if set, it logs on the console
     *  toString (boolean): if set, it returns an ISO date string, instead of a timestamp
     *  @param options
     */

    currentdate(options: { output: false, toString: false }): string;
    /**
     * currentdate() returns
     * the current timestamp
     */
    currentdate(): number;


  }
}
/**
 *  output (boolean): if set, it logs on the console
 *  toString (boolean): if set, it returns an ISO date string, instead of a timestamp
 */
declare const CurrentDateOptions: currentdate.formatString;

