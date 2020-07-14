export const sum = <T>(pred: (el: T) => number) => (arr: T[]) => arr.reduce((sum, el) => sum + pred(el), 0);