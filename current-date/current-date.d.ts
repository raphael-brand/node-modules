declare namespace currentdate {

  interface ICurrentDateOptions {
    /**
     * if set, it logs on the console
     */
    output: boolean;
    /**
     * if set, it returns an ISO date string
     */
    toString: boolean;
  }

  class CurrentDateOptions implements ICurrentDateOptions {
    output: boolean;
    toString: boolean
  }

  interface ICurrentDate {
    /**
     *  output (boolean): if set, it logs on the console
     *  toString (boolean): if set, it returns an ISO date string, instead of a timestamp
     *  @param options
     */

    currentdate(options: { output: boolean, toString: boolean }): string;
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
declare const CurrentDateOptions: currentdate.CurrentDateOptions;

