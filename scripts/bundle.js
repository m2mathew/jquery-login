(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

    var emailArray = [];
    var pwArray = [];
    var noErrors = true;
    var storedData = [{
        username: 'aaron@theironyard.com',
        password: 'password123'
    }, {
        username: 'admin@google.com',
        password: 'pandas'
    }, {
        username: 'm2mathew@me.com',
        password: 'honeycrisp'
    }];

    // target elements
    var $email = $('#email');
    var $password = $('#pass');
    var $button = $('#submit-button');
    var $error = $('#error');

    // create functions
    function onSubmitButton(e) {
        e.preventDefault();

        emailArray.push($email);
        console.log(emailArray[0].val());

        pwArray.push($password);
        console.log(pwArray[0].val());

        checkLength();
        checkData();

        if (noErrors === true) {
            window.location.href = "http://www.theironyard.com";
        }
    }

    function checkLength() {
        if (emailArray[0].val().length < 5) {
            $error.text('Please enter an email address before logging in.');
            noErrors = false;
        } else if (pwArray[0].val().length < 6) {
            $error.text('Please enter a password at least 6 digits long before logging in.');
            noErrors = false;
        }
        return noErrors;
    }

    function checkData() {
        var userMatch = false;
        var pwMatch = false;

        for (var i = 0; i < storedData.length; i++) {
            var userCompare = emailArray[0].filter(function (element) {
                var passesThrough = element === emailArray[0];
                console.log(userCompare);
                console.log(passesThrough);
                return passesThrough;
            });
        }

        if (userMatch === true || pwMatch === true) {
            noErrors = true;
        }
        return noErrors;
    }

    // add event listeners
    $('.footer-box').submit(onSubmitButton);
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map