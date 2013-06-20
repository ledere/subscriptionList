subscriptionList
================

Maintain a list of subscriptions. After all subscribers have finished, a callback is made

Problem statement
=================
Larger front-end applications are often hard to maintain when it comes to managing a-synchroneity. Firing processes 
in an a-synchronous manner is great, but what if you need to wait for some a-synchronous events to complete before 
firing another process? When writing larger front-end applications, trying to do so your code can become messy and 
hard to maintain

Solution
========
subscriptionList offers a solution to this problem. First, the framework offers a way of thinking in synchroneity
and forces you to describe dependencies between the synchronous and a-synchronous processes in your app. Second, 
you can use the javascript library to maintain 'lists' of dependencies that need to be completed before you start 
your dependent process.


Usage
=====

```javascript
// instnatiate our subscriptionList
var list = new subscritionList();

// subscribe an event to the list
list.subscribe ("foo");
// alternatively, you may subscribe using an array of event names
list.subscribe (["foo", "bar"]);

// set the complete handler
list.onComplete(function() {
  // perform this when all events on this list have been finished
});

// when a process on the list is done, mark it as finished
someProcess.done(function() {
  list.finished("foo");
});
```
