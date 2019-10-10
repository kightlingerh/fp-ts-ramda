import * as Benchmark from 'benchmark';
import * as F from '../src/';
import * as R from 'ramda';

const suite = new Benchmark.Suite();

/*
assoc (ramda) x 23,582,006 ops/sec ±2.20% (84 runs sampled)
assoc (fp-ts) x 21,004,297 ops/sec ±1.18% (88 runs sampled)
assoc (ramda - curry 1) x 13,085,618 ops/sec ±1.19% (88 runs sampled)
assoc (fp-ts- curry 1) x 13,819,999 ops/sec ±0.60% (91 runs sampled)
assoc (ramda - curry 2) x 4,135,244 ops/sec ±0.61% (86 runs sampled)
assoc (fp-ts- curry 2) x 14,196,634 ops/sec ±0.61% (88 runs sampled)
assoc (ramda - curried) x 3,577,166 ops/sec ±1.07% (88 runs sampled)
assoc (fp-ts- curried) x 11,202,748 ops/sec ±1.57% (88 runs sampled)
*/

suite
  .add('assoc (ramda)', function() {
    R.assoc('test', 30, { test: 25 });
  })
  .add('assoc (fp-ts)', function() {
    F.assoc('test', 30, { test: 25 });
  })
  .add('assoc (ramda - curry 1)', function() {
    R.assoc('test')(30, { test: 25 });
  })
  .add('assoc (fp-ts- curry 1)', function() {
    F.assoc('test')(30, { test: 25 });
  })
  .add('assoc (ramda - curry 2)', function() {
    R.assoc('test', 30)({ test: 25 });
  })
  .add('assoc (fp-ts- curry 2)', function() {
    F.assoc('test', 30)({ test: 25 });
  })
  .add('assoc (ramda - curried)', function() {
    R.assoc('test')(30)({ test: 25 });
  })
  .add('assoc (fp-ts- curried)', function() {
    F.assoc('test')(30)({ test: 25 });
  })
  .on('cycle', function(event: any) {
    // tslint:disable-next-line: no-console
    console.log(String(event.target));
  })
  .on('complete', function(this: any) {
    // tslint:disable-next-line: no-console
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ async: true });
