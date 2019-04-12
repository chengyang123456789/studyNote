# Promise

Promise 对象用于表示一个异步操作的最终状态（完成或失败），以及该异步操作的结果值。

##语法

* `new Promise( function(resolve, reject) {...} /* executor */  );`
* 参数:
    * executor是带有 resolve 和 reject 两个参数的函数 。Promise构造函数执行时立即调用executor 函数， resolve 和 reject 两个函数作为参数传递给executor（executor 函数在Promise构造函数返回所建promise实例对象前被调用）。resolve 和 reject 函数被调用时，分别将promise的状态改为fulfilled（完成）或rejected（失败）。executor 内部通常会执行一些异步操作，一旦异步操作执行完毕(可能成功/失败)，要么调用resolve函数来将promise状态改成fulfilled，要么调用reject 函数将promise的状态改为rejected。如果在executor函数中抛出一个错误，那么该promise 状态为rejected。executor函数的返回值被忽略。

##描述

Promise 对象是一个代理对象（代理一个值），被代理的值在Promise对象创建时可能是未知的。它允许你为异步操作的成功和失败分别绑定相应的处理方法（handlers）。 这让异步方法可以像同步方法那样返回值，但并不是立即返回最终执行结果，而是一个能代表未来出现的结果的promise对象

一个 Promise有以下几种状态:

* pending: 初始状态，既不是成功，也不是失败状态。
* fulfilled: 意味着操作成功完成。
* rejected: 意味着操作失败


## 方法

* Promise.all(iterable)
    这个方法返回一个新的promise对象，该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功，一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。这个新的promise对象在触发成功状态以后，会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，顺序跟iterable的顺序保持一致；如果这个新的promise对象触发了失败状态，它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息。Promise.all方法常被用于处理多个promise对象的状态集合。
* Promise.race(iterable)
    当iterable参数里的任意一个子promise被成功或失败后，父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，并返回该promise对象。
* Promise.reject(reason)
    返回一个状态为失败的Promise对象，并将给定的失败信息传递给对应的处理方法
* Promise.resolve(value)
    返回一个状态由给定value决定的Promise对象。如果该值是thenable(即，带有then方法的对象)，返回的Promise对象的最终状态由then方法执行决定；否则的话(该value为空，基本类型或者不带then方法的对象),返回的Promise对象状态为fulfilled，并且将该value传递给对应的then方法。通常而言，如果你不知道一个值是否是Promise对象，使用Promise.resolve(value) 来返回一个Promise对象,这样就能将该value以Promise对象形式使用。





































 Promise 本质上是一个绑定了回调的对象，而不是将回调传进函数内部。

 * 在 JavaScript 事件队列的当前运行完成之前，回调函数永远不会被调用
 * 通过 .then 形式添加的回调函数，甚至都在异步操作完成之后才被添加的函数，都会被调用
 * 通过多次调用 .then，可以添加多个回调函数，它们会按照插入顺序并且独立运行。


因此，Promise 最直接的好处就是链式调用

 ## 链式调用

 一个常见的需求就是连续执行两个或者多个异步操作，这种情况下，每一个后来的操作都在前面的操作执行成功之后，带着上一步操作所返回的结果开始执行。我们可以通过创造一个 Promise chain 来完成这种需求。

见证奇迹的时刻：then 函数会返回一个新的 Promise，跟原来的不同：

```js
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
```