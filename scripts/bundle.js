(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

    var emailArray = [];
    var pwArray = [];
    var noErrors = false;
    var validMatch = false;
    var users = [{ email: 'aaron@theironyard.com', password: 'password123' }, { email: 'admin@google.com', password: 'pandas' }, { email: 'm2mathew@me.com', password: 'honeycrisp' }];

    // target elements
    var $email = $('#email');
    var $password = $('#pass');
    var $button = $('#submit-button');
    var $emailErr = $('.email-error');
    var $pwErr = $('.password-error');

    // create functions
    function onSubmitButton(e) {
        e.preventDefault();
        $emailErr.text('');
        $pwErr.text('');

        var emailString = $email.val();
        var passwordString = $password.val();
        var emailValid = false;
        var passwordValid = false;

        if (!emailString) {
            $emailErr.text('You must enter your email address');
            return;
        } else if (!passwordString) {
            $pwErr.text('You must enter a password');
            return;
        }

        users.forEach(function (user, index) {
            if (user.email === emailString && user.email.indexOf('@') !== -1) {
                $emailErr.text('');
                emailValid = true;
            } else {
                $emailErr.text('Username not found.');
                return;
            }
            if (user.password === passwordString) {
                $pwErr.text('');
                passwordValid = true;
            } else {
                $pwErr.text('Password is incorrect.');
                return;
            }

            if (emailValid === true && passwordValid === true) {
                $emailErr.text('');
                $pwErr.text('');
                window.location.href = 'http://drumsensei.com';
            }
        });
    };

    // add event listeners
    $('.footer-box').submit(onSubmitButton);
});

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
