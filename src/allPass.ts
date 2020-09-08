import { Predicate } from 'fp-ts/lib/function';

function _allPass<T>(predicates: Array<Predicate<T>>, val: T): boolean {
  return predicates.every(p => p(val));
}

/**
 * Similar to [R.allPass](https://ramdajs.com/docs/#allPass). Returns a curried unary
 * predicate rather than a function whose arity matches that of the highest-arity predicate supplied.
 *
 * @since 0.1.4
 */

export function allPass<T>(predicates: Array<Predicate<T>>): Predicate<T>;
export function allPass<T>(predicates: Array<Predicate<T>>, val: T): boolean;
export function allPass<T>(predicates: Array<Predicate<T>>, val?: T): Predicate<T> | boolean {
  if (val === undefined) {
    return val => _allPass(predicates, val);
  } else {
    return _allPass(predicates, val);
  }
}
