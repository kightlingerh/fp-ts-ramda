import * as Benchmark from 'benchmark';
import * as F from '../src/';
import * as R from 'ramda';

const suite = new Benchmark.Suite();

/*
prop (ramda) x 40,803,823 ops/sec ±0.59% (88 runs sampled)
prop (fp-ts) x 23,918,791 ops/sec ±0.57% (90 runs sampled)
prop (ramda - curried) x 4,400,868 ops/sec ±0.67% (88 runs sampled)
prop (fp-ts - curried) x 17,314,301 ops/sec ±0.95% (90 runs sampled)
*/

suite
  .add('prop (ramda)', function() {
    R.prop('test', { test: 25 });
  })
  .add('prop (fp-ts)', function() {
    F.prop('test', { test: 25 });
  })
  .add('prop (ramda - curried)', function() {
    R.prop('test')({ test: 25 });
  })
  .add('prop (fp-ts - curried)', function() {
    F.prop('test')({ test: 25 });
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
