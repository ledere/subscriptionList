/*
 * subscritionList
 * This is your app. Example code for creating and subscribing to lists below
 *
 */

require(["jquery", "subscriptionList"], function($, sl) {

    "use strict";

    var model       = {},
        lists       = {},
        views       = {},
        controller  = {};

    // declare your working space in the DOM
    views.$app      = $.find("body");
    views.$light1   = $(views.$app).find(".light1");
    views.$light2   = $(views.$app).find(".light2");
    views.$light3   = $(views.$app).find(".light3");
    views.$all      = $(views.$app).find(".all");

    // construct subscriptionlist
    lists.turnTheLightsOn = new subscriptionList();

    //console.log("lists.turnTheLightsOn", lists.turnTheLightsOn);

    // do this
    lists.turnTheLightsOn.subscribe('light1');
    lists.turnTheLightsOn.subscribe(['light2', 'light3']); // alternatively, subscribe using array

    //do that
    setTimeout(function() {
        $(views.$light1).html("on");
        lists.turnTheLightsOn.finished('light1');
    }, 2000);
    setTimeout(function() {
        $(views.$amount).html("on");
        lists.turnTheLightsOn.finished('amount');
    }, 3000);
    setTimeout(function() {
        $(views.$light2).html("on");
        lists.turnTheLightsOn.finished('light2');
    }, 4000);
    setTimeout(function() {
        $(views.$light3).html("on");
        lists.turnTheLightsOn.finished('light3');
    }, 5000);

    // when all is done, run the code that is in the complete handler
    lists.turnTheLightsOn.onComplete(function() {
        $(views.$all).html("All lights are on");
    });


});