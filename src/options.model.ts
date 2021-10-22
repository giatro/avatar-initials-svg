export type MaxNumOfLetters = 1 | 2 | 3;

export interface IOptions {
    backgroundColor?: string;
    fontFamily?: string;
    maxNumOfLetters?: MaxNumOfLetters;
    rounded?: boolean;
    textColor?: string;
}