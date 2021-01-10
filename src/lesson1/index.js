import 'regenerator-runtime/runtime.js'
import { wordsCount, getWords } from './dz1'
// import Timer from './timer.js'
// let commonCounter = require('./commonjs-test');
// import * as esCounter from './es-test';
// import { range, testGen, rangeGen } from './range';

window.addEventListener('load', function () {
  const str = '  Всем  привет! Ура ура! '
  // let str = '   ';
  console.log(str)
  console.log('wordsCount: ', wordsCount(str)) // 4

  for (const some of getWords(str)) {
    this.console.log(some)
  }

  // const some = Symbol('some')
  // const other = Symbol('some')
  // console.log(some === other)

  // let password = Symbol();
  //
  // let user = {
  //   name: 'Admin',
  //   login: 'admin',
  //   [password]: 'qwerty'
  // };
  //
  // for(let name in user){
  //   console.log(name, user[name]);
  // }
  //
  // console.log(user[password]);

  /* for(let num of [1, 2, 3]){
    console.log(num);
  } */

  // let arr = [1, 2, 3]
  // let obj = arr[Symbol.iterator]()
  // obj.next() -> { value: 1, done: false }
  // obj.next() -> { value: 2, done: false }
  // obj.next() -> { value: 3, done: false }
  // obj.next() -> { done: true }

  // let range = { from: 1, to: 5 }
  // let obj = range[Symbol.iterator]()
  // obj.next() -> { value: 1, done: false }
  // obj.next() -> { value: 2, done: false }
  // obj.next() -> { value: 3, done: false }
  // obj.next() -> { value: 4, done: false }
  // obj.next() -> { value: 5, done: false }
  // obj.next() -> { done: true }

  // function some(){
  //   console.log('some called')
  // }
  //
  // some.hznz = 'i am sybmol iterator';
  // some();
  // console.log(some.name);
  // console.log(some.hznz);
  //
  // for(let num of range(1, 5, 0.1)){
  //   console.log(num);
  // }
  //
  // for(let num of range(1, 5, 0.5)){
  //   console.log(num);
  // }
  //
  // let og = testGen();
  // console.log(og);
  // console.log(og.next());
  // console.log(og.next());
  // console.log(og.next());
  // console.log(og.next());
  //
  // for(let num of rangeGen(1, 5, 0.5)){
  //   console.log(num);
  // }
  // console.log(document.querySelector('body'))
  // let timer1 = new Timer(document.querySelector('body'), 100);
  //
  // console.log(timer1)
  // console.log(commonCounter);
  // commonCounter.current = 10;
  // console.log(commonCounter.current);
  // commonCounter.inc();
  // console.log(commonCounter.current);
  //
  // console.log(esCounter);
  // //esCounter.current = 10;
  // console.log(esCounter.current);
  // esCounter.inc();
  // console.log(esCounter.current);
})
