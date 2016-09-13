# Functional Reactive Programming with rx.js

Reactive programming is a way to handle and manipulate lots of ansynchonous events more easily.

Two separate concepts that fit nicely together:

1. Functional programming
2. Reactive programming

## Functional programming

"Describing what want not how you get get there".

See 01-functional-programming.js

## Reactive programming

"Everything is an array"

Implementation of the observer pattern - https://sourcemaking.com/design_patterns/observer

Everything revolves around Observables and functions to manipulate them.

What is an Observable in RP? - Simply, it's an array over time.

```js
[ 1,     2,   3,        4,  5 ]
//>------------time------------>
```

Observables can be manipulated just like arrays. Reactive frameworks allow us to manipulate them using functions similar to those we know and love to manipulate array (and much more).

Reactive programming sets up a chain reaction to handle items emitted by an observable. Observable functions are chain-able.

lets see it in action, see

* 02-reactive-functional-programming.js
* 03-reactive-functional-programming.js

Resources:
* https://github.com/Reactive-Extensions/RxJS
* https://gist.github.com/staltz/868e7e9bc2a7b8c1f754
* http://reactivex.io/learnrx/
* http://ryancrichton.co.za/2015/08/22/reactive-programming-what-clicked-for-me.html
