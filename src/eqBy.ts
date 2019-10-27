import { eq, Eq } from 'fp-ts/lib/Eq';
import { Predicate } from 'fp-ts/lib/function';

/**
 * Similar to [R.eqBy](https://ramdajs.com/docs/#eqBy), but requires an explicit `Eq<A>` instance
 *
 * @since 0.1.8
 */
export function eqBy<A>(
  E: Eq<A>
): {
  <B>(f: (b: B) => A, x: B, y: B): boolean;
  <B>(f: (b: B) => A, x: B): Predicate<B>;
  <B>(f: (b: B) => A): {
    (x: B, y: B): boolean;
    (x: B): Predicate<B>;
  };
};
// export function eqBy<A>(E: Eq<A>): <B>(f: (b: B) => A) => {
//   (x: B, y: B): boolean;
//   (x: B): Predicate<B>;
// };
// export function eqBy<A>(E: Eq<A>): <B>(f: (b: B) => A, x: B) => Predicate<B>;
// export function eqBy<A>(E: Eq<A>): <B>(f: (b: B) => A, x: B, y: B) => boolean;
export function eqBy<A>(E: Eq<A>): <B>(f: (b: B) => A, x?: B, y?: B) => any {
  return <B>(f: (b: B) => A, x?: B, y?: B) => {
    const e = eq.contramap(E, f);
    if (x === undefined) {
      return (x: B, y?: B) => {
        if (y === undefined) {
          return (y: B) => e.equals(x, y);
        } else {
          return e.equals(x, y);
        }
      };
    } else if (y === undefined) {
      return (y: B) => e.equals(x, y);
    } else {
      return e.equals(x, y);
    }
  };
}
