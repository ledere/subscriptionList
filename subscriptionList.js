/*
 * subscriptionList jQuery plugin
 *
 */

define("subscriptionList", function() {

    //"use strict";

    var subscribe = function(names) {
        // subscribe to list
        self.list = this.list;
        if (Object.prototype.toString.call( names ) === "[object String]") {
            self.list.push(names);
        }
        else if (Object.prototype.toString.call( names ) === "[object Array]") {
            for (var i=0;i<names.length;i++) {
                self.list.push(names[i]);
            }
        }
        else {
            console.warn("[subscriptionList] Incorrect use of subscribe");
        }
    };


    var finished = function(name) {
        // complete an item
        self.list = this.list;

        var position = self.list.indexOf(name);
        if(position > -1) {
            self.list.splice(self.list.indexOf(name), 1); // remove item from list
            if(self.list.length < 1) { // list empty?
                this.callback(); // run callback!
            }
        }
        else {
            console.warn("[subscriptionList] finished failed: no such key in list", name)
        }
    };


    var onComplete = function(callback) {
        // set the callback
        this.callback = callback;
    };


    var subscriptionList = function() {
        // these are my variables
        this.list = [];
        this.callback = {};
        // these are my methods
        this.subscribe = subscribe;
        this.finished = finished;
        this.onComplete = onComplete;
    };

    this.subscriptionList = subscriptionList; // create an instance of subscriptionList function when called

});